import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {
  private _storage: Storage = window.sessionStorage;
  private _serializer = JSON.stringify;
  private _deserializer = JSON.parse;

  public setItem(key: string, value: any) {
    this._storage.setItem(key, this._serializer(value));
  }

  public getItem(key: string) {
    return this._deserializer(this._storage.getItem(key));
  }

  public removeItem(key: string) {
    this._storage.removeItem(key);
  }

  public getObservable(key: string): Observable<any> {
    // TODO: Actually observe the value.
    return Observable.of(this.getItem(key));
  }
}
