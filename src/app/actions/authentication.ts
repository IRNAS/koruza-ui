import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class AuthenticationActions {
  static LOGIN = 'authentication.login';
  public login(username: string, password: string): Action {
    return {
      type: AuthenticationActions.LOGIN,
      payload: { username, password }
    };
  }

  static LOGIN_SUCCESS = 'authentication.login_success';
  public loginSuccess(username: string, password: string): Action {
    return {
      type: AuthenticationActions.LOGIN_SUCCESS,
      payload: { username, password }
    };
  }

  static LOGIN_FAILED = 'authentication.login_failed';
  public loginFailed(): Action {
    return {
      type: AuthenticationActions.LOGIN_FAILED
    };
  }

  static LOGOUT = 'authentication.logout';
  public logout(): Action {
    return {
      type: AuthenticationActions.LOGOUT
    };
  }

  static LOGOUT_SUCCESS = 'authentication.logout_success';
  public logoutSuccess(): Action {
    return {
      type: AuthenticationActions.LOGOUT_SUCCESS
    };
  }

  static LOGOUT_FAILED = 'authentication.logout_failed';
  public logoutFailed(): Action {
    return {
      type: AuthenticationActions.LOGOUT_FAILED
    };
  }
}
