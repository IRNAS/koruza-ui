import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

import {UbusService, LocalStorageService} from '../services';
import {AuthenticationActions} from '../actions';

@Injectable()
export class AuthenticationEffects {
  private _router: Router;

  constructor(private ubus: UbusService,
              private updates: Actions,
              private actions: AuthenticationActions,
              private localStorage: LocalStorageService,
              private router: Router) {
  }

  /**
   * Handles the login via uBus.
   */
  @Effect() login = this.updates
    .ofType(AuthenticationActions.LOGIN)
    .map(update => update.payload)
    .switchMap(payload =>
      this.ubus.login(payload.username, payload.password)
        .map(session => this.actions.loginSuccess(session.username, payload.password))
        .catch(() => Observable.of(this.actions.loginFailed()))
    );

  /**
   * Performs a redirect after a successful login.
   */
  @Effect({dispatch: false}) loginRedirect = this.updates
    .ofType(AuthenticationActions.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/']));

  /**
   * Invalidates the session after a failed login.
   */
  @Effect({dispatch: false}) loginInvalidateSession = this.updates
    .ofType(AuthenticationActions.LOGIN_FAILED)
    .do(() => this.localStorage.removeItem('login.data'));

  /**
   * Stores the login credentials after a successful login.
   */
  @Effect({dispatch: false}) loginStoreSession = this.updates
    .ofType(AuthenticationActions.LOGIN_SUCCESS)
    .do((update) => this.localStorage.setItem('login.data', {
      username: update.payload.username,
      password: update.payload.password
    }));

  /**
   * Restores an existing session when available.
   */
  @Effect() loginRestoreSession = this.localStorage.getObservable('login.data')
    .filter((value) => !!value)
    .map((data) => this.actions.login(data.username, data.password));

  /**
   * Handles the logout via uBus.
   */
  @Effect() logout = this.updates
    .ofType(AuthenticationActions.LOGOUT)
    .switchMap(action =>
      this.ubus.logout()
        .map(() => this.actions.logoutSuccess())
        .catch(() => Observable.of(this.actions.logoutFailed()))
    );

  /**
   * Invalidates the session after a successful logout.
   */
  @Effect({dispatch: false}) logoutInvalidateSession = this.updates
    .ofType(AuthenticationActions.LOGOUT_SUCCESS)
    .do(() => this.localStorage.removeItem('login.data'));
}
