import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class KoruzaActions {
  static UPDATE = 'koruza.update';
  public update(): Action {
    return {
      type: KoruzaActions.UPDATE
    };
  }

  static UPDATE_COMPLETE = 'koruza.update_complete';
  public updateComplete(status: any): Action {
    return {
      type: KoruzaActions.UPDATE_COMPLETE,
      payload: {status}
    }
  }

  static UPDATE_FAILED = 'koruza.update_failed';
  public updateFailed(): Action {
    return {
      type: KoruzaActions.UPDATE_FAILED
    }
  }
}
