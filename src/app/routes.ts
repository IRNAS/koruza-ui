import {Routes}  from '@angular/router';

import {AuthenticationGuard} from './guards/authentication';
import {LoginPageComponent} from './pages/login';
import {DashboardPageComponent} from './pages/dashboard';

export const routes: Routes = [
  // Default route.
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  // Pages.
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthenticationGuard]}
];
