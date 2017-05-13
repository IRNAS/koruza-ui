import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/let';

import {AppState, getAuthenticationState} from '../reducers';
import {isAuthenticating, hasAuthenticationFailed, isAuthenticated} from '../reducers/authentication';
import {AuthenticationActions} from '../actions';

@Component({
  selector: 'login-page',
  template: `
    <div layout="row">
      <div flex></div>
      <md-card flex>
        <md-card-title>Login</md-card-title>
        <md-card-content>
          <div *ngIf="hasAuthenticationFailed | async" class="login-error">
            Username and/or password are incorrect.
          </div>
          <form
            layout="column"
            (ngSubmit)="onSubmit()"
            #loginForm="ngForm">

            <md-input-container flex>
              <input
                mdInput
                required
                name="username"
                placeholder="Username"
                [(ngModel)]="username">
            </md-input-container>

            <md-input-container flex>
              <input
                mdInput
                required
                name="password"
                type="password"
                placeholder="Password"
                [(ngModel)]="password">
            </md-input-container>

            <div *ngIf="!(isAuthenticating | async)" flex layout="row">
              <div flex></div>
              <button
                type="submit"
                [disabled]="!loginForm.form.valid"
                md-raised-button>
                Login
              </button>
            </div>
            <div *ngIf="isAuthenticating | async" flex layout="row">
              <div flex></div>
              <md-spinner class="login-spinner"></md-spinner>
            </div>
          </form>
        </md-card-content>
      </md-card>
      <div flex></div>
    </div>
  `,
  styleUrls: ['login.scss'],
})
export class LoginPageComponent {
  public username: string = '';
  public password: string = '';

  public isAuthenticating: Observable<boolean> = this.store
    .let(getAuthenticationState())
    .let(isAuthenticating());

  public hasAuthenticationFailed: Observable<boolean> = this.store
    .let(getAuthenticationState())
    .let(hasAuthenticationFailed());

  constructor(private store: Store<AppState>,
              private actions: AuthenticationActions) {
  }

  public onSubmit() {
    this.store.dispatch(this.actions.login(this.username, this.password));
  }
}
