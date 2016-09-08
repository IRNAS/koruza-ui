import './polyfills';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {AppModule} from './app';

if (environment.production) {
  enableProdMode();
}

// TODO: Check how we can use static compilation for faster loads.
platformBrowserDynamic().bootstrapModule(AppModule);
