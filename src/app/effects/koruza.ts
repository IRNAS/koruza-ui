import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/zip';

import {UbusService} from '../services';
import {KoruzaActions} from '../actions';

@Injectable()
export class KoruzaEffects {
  constructor(private ubus: UbusService,
              private updates: Actions,
              private actions: KoruzaActions) {
  }

  /**
   * Periodically refresh state from the remote node.
   */
  @Effect() periodicRefresh = timer(0, 1000).map(() => this.actions.update());

  /**
   * Periodically refresh survey from the remote node.
   */
  @Effect() periodicSurvey = timer(0, 2000).map(() => this.actions.survey());

  /**
   * Handle state refresh via an uBus call.
   */
  @Effect() refreshState = this.updates
    .ofType(KoruzaActions.UPDATE)
    .switchMap(action =>
      Observable.zip(
        this.ubus.call('koruza.get_status'),
        this.ubus.call('sfp.get_modules'),
        this.ubus.call('sfp.get_diagnostics')
      )
        .map(
          ([status, sfpModules, sfpDiagnostics]) => {
            // Merge in SFP modules.
            status.sfps = {};
            for (const key in sfpModules) {
              const sfp = sfpModules[key];
              const diagnostics = sfpDiagnostics[key].value || {};
              status.sfps[key] = {
                bus: sfp.bus,
                manufacturer: sfp.manufacturer,
                serialNumber: sfp.serial_number,
                type: sfp.type,
                connector: sfp.connector,
                bitrate: sfp.bitrate,
                wavelength: sfp.wavelength,
                diagnostics: {
                  temperature: Number.parseFloat(diagnostics.temperature),
                  vcc: Number.parseFloat(diagnostics.vcc),
                  txBias: Number.parseFloat(diagnostics.tx_bias),
                  txPower: Number.parseFloat(diagnostics.tx_power),
                  rxPower: Number.parseFloat(diagnostics.rx_power)
                }
              };
            }

            return this.actions.updateComplete(status);
          }
        )
        .catch(() => Observable.of(this.actions.updateFailed())));

  /**
   * Handle survey refresh.
   */
  @Effect() refreshSurvey = this.updates
    .ofType(KoruzaActions.SURVEY)
    .switchMap(action =>
      this.ubus.call('koruza.get_survey')
        .map((survey) => this.actions.surveyComplete(survey))
        .catch(() => Observable.of(this.actions.surveyFailed()))
    );

  /**
   * Handle motor move command.
   */
  @Effect() moveMotors = this.updates
    .ofType(KoruzaActions.MOVE_MOTORS)
    .switchMap(action =>
      this.ubus.call('koruza.move_motor', {
        x: action.payload.x,
        y: action.payload.y,
        z: 0
      })
        .map(() => this.actions.update())
        .catch(() => Observable.of(this.actions.update()))
    );

  /**
   * Handle calibration configuration command.
   */
  @Effect() calibrationSet = this.updates
    .ofType(KoruzaActions.SET_CALIBRATION)
    .switchMap(action =>
      this.ubus.call('koruza.set_webcam_calibration', {
        x: action.payload.x,
        y: action.payload.y,
      })
        .map(() => this.actions.update())
        .catch(() => Observable.of(this.actions.update()))
    );

  /**
   * Handle set leds command.
   */
  @Effect() ledsSet = this.updates
    .ofType(KoruzaActions.SET_LEDS)
    .switchMap(action =>
      this.ubus.call('koruza.set_leds', {
        state: action.payload.state,
      })
        .map(() => this.actions.update())
        .catch(() => Observable.of(this.actions.update()))
    );

  /**
   * Handle homing command.
   */
  @Effect() homing = this.updates
    .ofType(KoruzaActions.HOMING)
    .switchMap(action =>
      this.ubus.call('koruza.homing')
        .map(() => this.actions.update())
        .catch(() => Observable.of(this.actions.update()))
    );

  /**
   * Handle survey reset command.
   */
  @Effect() surveyReset = this.updates
    .ofType(KoruzaActions.SURVEY_RESET)
    .switchMap(action =>
      this.ubus.call('koruza.reset_survey')
        .map(() => this.actions.survey())
        .catch(() => Observable.of(this.actions.survey()))
    );

  /**
   * Handle software upgrade command.
   */
  @Effect() startUpgrade = this.updates
    .ofType(KoruzaActions.START_UPGRADE)
    .switchMap(action =>
      this.ubus.call('koruza.upgrade')
        .map(() => this.actions.update())
        .catch(() => Observable.of(this.actions.update()))
    );
}
