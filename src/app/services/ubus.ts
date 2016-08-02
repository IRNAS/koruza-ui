import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

interface UbusSessionInfo {
  username: string;
}

interface UbusLoginResponse {
  ubus_rpc_session: string;
  expires: number;
  timeout: number;
  data: {
    username: string;
  };
}

/**
 * uBus response codes.
 */
export enum UbusStatus {
  OK,
  INVALID_COMMAND,
  INVALID_ARGUMENT,
  METHOD_NOT_FOUND,
  NOT_FOUND,
  NO_DATA,
  PERMISSION_DENIED,
  TIMEOUT,
  NOT_SUPPORTED,
  UNKNOWN_ERROR,
  CONNECTION_FAILED
}

/**
 * Errors returned by calls to uBus.
 */
export class UbusError extends Error {
  constructor(public errorCode: UbusStatus) {
    super(`uBus call has failed with error code ${errorCode}`);
  }
}

/**
 * A service that enables communication with UBUS.
 */
@Injectable()
export class UbusService {
  private _sessionId: string;

  constructor(private _http: Http) {
  }

  /**
   * Calls a method on an object via UBUS.
   *
   * @param object Object identifier
   * @param method Method name
   * @param parameters Parameters object
   * @return A response observable
   */
  private _call(object: string, method: string, parameters: any): Observable<any> {
    // The login method must be handled specially, as it requires a NULL session.
    let sessionId = this._sessionId;
    if (object === 'session' && method === 'login') {
      sessionId = '00000000000000000000000000000000';
    }

    return this._http.post(environment.ubus.endpoint, {
      jsonrpc: '2.0',
      method: 'call',
      id: 1,
      params: [sessionId, object, method, parameters]
    }).map((response) => {
      const body = response.json();
      const resultCode: UbusStatus = body.result[0];

      if (resultCode === UbusStatus.OK) {
        return body.result[1];
      } else {
        throw new UbusError(resultCode);
      }
    });
  }

  /**
   * Calls a method on an object via UBUS.
   *
   * @param path Path in the form of `object.method`
   * @param parameters Parameters object
   * @return A response observable
   */
  public call(path: string, parameters: any): Observable<any> {
    const [object, method] = path.split('.');
    return this._call(object, method, parameters);
  }

  /**
   * Establishes a new RPC session via UBUS.
   *
   * @param username Username
   * @param password Password
   * @return A session information observable
   */
  public login(username: string, password: string): Observable<UbusSessionInfo> {
    return this._call('session', 'login', {
      username: username,
      password: password,
      timeout: 3600
    }).map((response: UbusLoginResponse) => {
      if (!response.ubus_rpc_session) {
        throw new Error('Received invalid response from session.login!');
      }

      this._sessionId = response.ubus_rpc_session;
      // TODO: What about session expiration?

      return {
        username: response.data.username
      };
    });
  }

  /**
   * Terminates the current session via UBUS.
   */
  public logout(): Observable<boolean> {
    return this._call('session', 'destroy', {session: this._sessionId});
  }
}
