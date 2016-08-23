import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {KoruzaActions} from '../actions';

import '@ngrx/core/add/operator/select';

export interface SfpState {
  bus: string;
  manufacturer: string;
  revision: string;
  serialNumber: string;
  type: number;
  connector: number;
  bitrate: number;
  wavelength: number;
  diagnostics: {
    temperature: number;
    vcc: number;
    txBias: number;
    txPower: number;
    rxPower: number;
  };
}

export interface SfpStateMap {
  [serialNumber: string]: SfpState;
}

export interface KoruzaState {
  connected: boolean;
  motors: {
    x: number;
    y: number;
    z: number;
  };
  sfps: SfpStateMap;
  cameraCalibration: {
    offsetX: number;
    offsetY: number;
  };
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
  sfps: {},
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
        sfps: status.sfps,
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

export function getCameraCalibration() {
  return (state: Observable<KoruzaState>) =>
    state.select(s => s.cameraCalibration);
}
