import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AuthenticationActions} from '../actions';

import '@ngrx/core/add/operator/select';

export interface AuthenticationState {
  authenticated: boolean;
  username: string;
  isAuthenticating: boolean;
  authenticationFailed: boolean;
}

const initialState: AuthenticationState = {
  authenticated: false,
  username: '',
  isAuthenticating: false,
  authenticationFailed: false
};

export function reducer(state = initialState, action: Action): AuthenticationState {
  switch (action.type) {
    case AuthenticationActions.LOGIN: {
      return Object.assign({}, state, {
        isAuthenticating: true,
        authenticationFailed: false
      });
    }
    case AuthenticationActions.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        authenticated: true,
        username: action.payload.username,
        isAuthenticating: false,
        authenticationFailed: false
      });
    }
    case AuthenticationActions.LOGIN_FAILED: {
      return Object.assign({}, state, {
        authenticated: false,
        username: '',
        isAuthenticating: false,
        authenticationFailed: true
      });
    }
    default: {
      return state;
    }
  }
};

export function isAuthenticated() {
  return (state: Observable<AuthenticationState>) =>
    state.select(s => s.authenticated);
}

export function isAuthenticating() {
  return (state: Observable<AuthenticationState>) =>
    state.select(s => s.isAuthenticating);
}

export function hasAuthenticationFailed() {
  return (state: Observable<AuthenticationState>) =>
    state.select(s => s.authenticationFailed);
}

export function getUsername() {
  return (state: Observable<AuthenticationState>) =>
    state.select(s => s.username);
}
