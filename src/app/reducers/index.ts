import {Observable} from 'rxjs/Observable';
import {combineReducers} from '@ngrx/store';

import * as authentication from './authentication';
import * as koruza from './koruza';

import '@ngrx/core/add/operator/select';

/**
 * Combined application state.
 */
export interface AppState {
  authentication: authentication.AuthenticationState;
  koruza: koruza.KoruzaState;
}

export default combineReducers({
  authentication: authentication.reducer,
  koruza: koruza.reducer
});

export function getAuthenticationState() {
  return (state: Observable<AppState>) =>
    state.select(s => s.authentication);
}

export function getKoruzaState() {
  return (state: Observable<AppState>) =>
    state.select(s => s.koruza);
}
