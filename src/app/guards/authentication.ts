import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';

import {AppState, getAuthenticationState} from '../reducers';
import {isAuthenticated} from '../reducers/authentication';

/**
 * Authentication router guard.
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  public canActivate(): Observable<boolean> {
    return this.store
      .let(getAuthenticationState())
      .let(isAuthenticated())
      .do((authenticated) => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      })
      .take(1);
  }
}
