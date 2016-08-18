import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';

import 'rxjs/add/operator/switchMap';

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
  @Effect() periodicRefresh = timer(0, 10000).map(() => this.actions.update());

  /**
   * Handle state refresh via an uBus call.
   */
  @Effect() refreshState = this.updates
    .ofType(KoruzaActions.UPDATE)
    .switchMap(update =>
      this.ubus.call('koruza.get_status')
        .map(response => this.actions.updateComplete(response))
        .catch(() => Observable.of(this.actions.updateFailed())));
}
