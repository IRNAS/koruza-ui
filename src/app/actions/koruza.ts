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

  static MOVE_MOTORS = 'koruza.move_motors';
  public moveMotors(x: number, y: number): Action {
    return {
      type: KoruzaActions.MOVE_MOTORS,
      payload: {x, y}
    }
  }

  static SET_CALIBRATION = 'koruza.set_calibration';
  public setCalibration(x: number, y: number): Action {
    return {
      type: KoruzaActions.SET_CALIBRATION,
      payload: {x, y}
    }
  }
}
