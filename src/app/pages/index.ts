import {DashboardPageComponent} from './dashboard';
import {LoginPageComponent} from './login';
import {UpgradePageComponent, UpgradeInProgressDialog} from './upgrade';

export {DashboardPageComponent};
export {LoginPageComponent};
export {UpgradePageComponent};

export const pages = [
  DashboardPageComponent,
  LoginPageComponent,
  UpgradePageComponent,
  UpgradeInProgressDialog
];
