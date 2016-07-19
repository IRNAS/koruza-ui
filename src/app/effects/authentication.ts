import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, StateUpdates} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import {UbusService} from '../services';
import {AuthenticationActions} from '../actions';

@Injectable()
export class AuthenticationEffects {
  private _router: Router;

  constructor(private ubus: UbusService,
              private updates: StateUpdates<any>,
              private actions: AuthenticationActions,
              private injector: Injector) {
  }

  private get router(): Router {
    if (!this._router) this._router = this.injector.get(Router);
    return this._router;
  }

  @Effect() login = this.updates
    .whenAction(AuthenticationActions.LOGIN)
    .map(update => update.action.payload)
    .switchMap(payload =>
      this.ubus.login(payload.username, payload.password)
        .map(session => this.actions.loginSuccess(session.username))
        .catch(() => Observable.of(this.actions.loginFailed()))
    );

  @Effect() loginRedirect = this.updates
    .whenAction(AuthenticationActions.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/']));

  @Effect() logout = this.updates
    .whenAction(AuthenticationActions.LOGOUT)
    .switchMap(action =>
      this.ubus.logout()
        .map(() => this.actions.logoutSuccess())
        .catch(() => Observable.of(this.actions.logoutFailed()))
    );
}
