import {Observable} from 'rxjs/Observable';
import {combineReducers} from '@ngrx/store';

import * as authentication from './authentication';

import '@ngrx/core/add/operator/select';

/**
 * Combined application state.
 */
export interface AppState {
  authentication: authentication.AuthenticationState;
}

export default combineReducers({
  authentication: authentication.reducer
});

export function getAuthenticationState() {
  return (state: Observable<AppState>) =>
    state.select(s => s.authentication);
}
