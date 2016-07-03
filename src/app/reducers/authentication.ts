import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AuthenticationActions} from '../actions';

import '@ngrx/core/add/operator/select';

export interface AuthenticationState {
  authenticated: boolean;
  username: string;
}

const initialState: AuthenticationState = {
  authenticated: false,
  username: ''
};

export function reducer(state = initialState, action: Action): AuthenticationState {
  switch (action.type) {
    case AuthenticationActions.LOGIN_SUCCESS: {
      return {
        authenticated: true,
        username: action.payload.username
      };
    }
    case AuthenticationActions.LOGIN_FAILED: {
      return {
        authenticated: false,
        username: ''
      };
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

export function getUsername() {
  return (state: Observable<AuthenticationState>) =>
    state.select(s => s.username);
}
