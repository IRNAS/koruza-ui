import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {provideStore} from '@ngrx/store';
import {runEffects} from '@ngrx/effects';

import {AppComponent, environment} from './app/';
import {routerProviders} from './app/routes';
import actions from './app/actions';
import effects from './app/effects';
import reducer from './app/reducers';
import services from './app/services';
import {provideDirectives} from './app/directives';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideStore(reducer),
  runEffects(effects),
  services,
  actions,
  routerProviders,
  disableDeprecatedForms(),
  provideForms(),
  provideDirectives()
]);
