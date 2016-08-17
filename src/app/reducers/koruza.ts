import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {KoruzaActions} from '../actions';

import '@ngrx/core/add/operator/select';

export interface KoruzaState {
  connected: boolean;
  motors: {
    x: number;
    y: number;
    z: number;
  };
  cameraCalibration: {
    offsetX: number;
    offsetY: number;
  }
  isFetching: boolean;
  lastUpdated: Date;
}

const initialState: KoruzaState = {
  connected: false,
  motors: {
    x: 0,
    y: 0,
    z: 0
  },
  cameraCalibration: {
    offsetX: 0,
    offsetY: 0
  },
  isFetching: false,
  lastUpdated: null
};

export function reducer(state = initialState, action: Action): KoruzaState {
  switch (action.type) {
    case KoruzaActions.UPDATE: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case KoruzaActions.UPDATE_COMPLETE: {
      const status = action.payload.status;

      return Object.assign({}, state, {
        connected: status.connected,
        motors: {
          x: status.motors.x,
          y: status.motors.y,
          z: status.motors.z
        },
        cameraCalibration: {
          offsetX: status.camera_calibration.offset_x,
          offsetY: status.camera_calibration.offset_y
        },
        isFetching: false,
        lastUpdated: new Date()
      });
    }
    default: {
      return state;
    }
  }
};
