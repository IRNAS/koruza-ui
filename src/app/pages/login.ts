import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {Store} from '@ngrx/store';

import {AppState} from '../reducers';
import {AuthenticationActions} from '../actions';

@Component({
  selector: 'login-page',
  template: `
    <div layout="row">
      <div flex></div>
      <md-card flex>
        <md-card-title>Login</md-card-title>
        <md-card-content>
          <form
            layout="column"
            (ngSubmit)="onSubmit()"
            #loginForm="ngForm">

            <md-input #username
              flex
              required
              name="username"
              placeholder="Username"
              [(ngModel)]="user.username">
            </md-input>

            <md-input #password
              flex
              required
              name="password"
              type="password"
              placeholder="Password"
              [(ngModel)]="user.password">
            </md-input>

            <div flex layout="row">
              <div flex></div>
              <button
                type="submit"
                [disabled]="!loginForm.form.valid"
                md-raised-button>
                Login
              </button>
            </div>
          </form>
        </md-card-content>
      </md-card>
      <div flex></div>
    </div>
  `,
  directives: [
    FORM_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES
  ]
})
export class LoginPageComponent {
  public user: {
    username: string;
    password: string;
  } = {
    username: '',
    password: ''
  };

  constructor(private store: Store<AppState>,
              private actions: AuthenticationActions) {
  }

  public onSubmit() {
    this.store.dispatch(this.actions.login(this.user.username, this.user.password));
  }
}
