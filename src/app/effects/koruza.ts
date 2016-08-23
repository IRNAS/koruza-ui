import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';

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
}
