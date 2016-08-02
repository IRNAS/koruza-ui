import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, StateUpdates} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import {UbusService, LocalStorageService} from '../services';
import {AuthenticationActions} from '../actions';

@Injectable()
export class AuthenticationEffects {
  private _router: Router;

  constructor(private ubus: UbusService,
              private updates: StateUpdates<any>,
              private actions: AuthenticationActions,
              private localStorage: LocalStorageService,
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
        .map(session => this.actions.loginSuccess(session.username, payload.password))
        .catch(() => Observable.of(this.actions.loginFailed()))
    );

  @Effect() loginRedirect = this.updates
    .whenAction(AuthenticationActions.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/']));

  @Effect() loginInvalidateSession = this.updates
    .whenAction(AuthenticationActions.LOGIN_FAILED)
    .do(() => this.localStorage.removeItem('login.data'));

  @Effect() loginStoreSession = this.updates
    .whenAction(AuthenticationActions.LOGIN_SUCCESS)
    .do((update) => this.localStorage.setItem('login.data', {
      username: update.action.payload.username,
      password: update.action.payload.password
    }));

  @Effect() loginRestoreSession = this.localStorage.getObservable('login.data')
    .filter((value) => !!value)
    .map((data) => this.actions.login(data.username, data.password));

  @Effect() logout = this.updates
    .whenAction(AuthenticationActions.LOGOUT)
    .switchMap(action =>
      this.ubus.logout()
        .map(() => this.actions.logoutSuccess())
        .catch(() => Observable.of(this.actions.logoutFailed()))
    );

  @Effect() logoutInvalidateSession = this.updates
    .whenAction(AuthenticationActions.LOGOUT_SUCCESS)
    .do(() => this.localStorage.removeItem('login.data'));
}
