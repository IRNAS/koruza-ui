import {HTTP_PROVIDERS} from '@angular/http';
import {UbusService} from './ubus';
import {LocalStorageService} from './localstorage';

export {UbusService, LocalStorageService};

export default [
  HTTP_PROVIDERS,
  UbusService,
  LocalStorageService
];
