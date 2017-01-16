import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {MaterialModule} from '@angular/material';

import {AppComponent} from './app';
import {routes} from './routes';
import reducer from './reducers';
import {AuthenticationEffects, KoruzaEffects} from './effects';
import services from './services';
import actions from './actions';
import directives from './directives';
import components from './components';
import guards from './guards';
import pages from './pages';
import pipes from './pipes';

@NgModule({
  imports: [
    BrowserModule,
    // Router.
    RouterModule.forRoot(routes, {useHash: true}),
    // NgRx.
    StoreModule.provideStore(reducer),
    EffectsModule.runAfterBootstrap(AuthenticationEffects),
    EffectsModule.run(KoruzaEffects),
    // Forms.
    FormsModule,
    // HTTP.
    HttpModule,
    // Angular Material.
    MaterialModule.forRoot()
  ],
  declarations: [
    pipes,
    directives,
    components,
    pages,
    // Main component.
    AppComponent
  ],
  providers: [
    services,
    actions,
    guards
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
