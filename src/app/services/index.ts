import {HTTP_PROVIDERS} from '@angular/http';
import {UbusService} from './ubus';

export {UbusService};

export default [
  HTTP_PROVIDERS,
  UbusService
];
