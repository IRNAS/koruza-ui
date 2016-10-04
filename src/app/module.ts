import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdListModule} from '@angular2-material/list';
import {MdIconModule} from '@angular2-material/icon';
import {MdButtonModule} from '@angular2-material/button';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdCardModule} from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';

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
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),
    MdIconModule.forRoot(),
    MdButtonModule.forRoot(),
    MdButtonToggleModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdCardModule.forRoot(),
    MdInputModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdSlideToggleModule.forRoot(),
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
