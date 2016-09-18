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

export interface MotorState {
  x: number;
  y: number;
  rangeX: number;
  rangeY: number;
}

export interface CameraCalibrationState {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
  distance: number;
}

export interface KoruzaState {
  connected: boolean;
  motors: MotorState;
  sfps: SfpStateMap;
  cameraCalibration: CameraCalibrationState;
  isFetching: boolean;
  lastUpdated: Date;
}

const initialState: KoruzaState = {
  connected: false,
  motors: {
    x: 0,
    y: 0,
    rangeX: 50000,
    rangeY: 50000
  },
  sfps: {},
  cameraCalibration: {
    width: 1280,
    height: 720,
    offsetX: 0,
    offsetY: 0,
    distance: 7000
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
          rangeX: status.motors.range_x || 50000,
          rangeY: status.motors.range_y || 50000
        },
        sfps: status.sfps,
        cameraCalibration: {
          width: status.camera_calibration.width || 1280,
          height: status.camera_calibration.height || 720,
          offsetX: status.camera_calibration.offset_x,
          offsetY: status.camera_calibration.offset_y,
          distance: status.camera_calibration.distance || 7000
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

export function getMotors() {
  return (state: Observable<KoruzaState>) =>
    state.select(s => s.motors);
}
