import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {environment} from '../../environments/environment';
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
  port: number;
  path: string;
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
  distance: number;
}

export interface ErrorState {
  code: number;
}

export interface LedsState {
  state: boolean;
}

export interface NetworkState {
  interface: string;
  ipAddress: string;
  ready: boolean;
}

export interface Survey {
  coverage: {
    x: number;
    y: number;
  };
  bins: {
    x: number;
    y: number;
  };
  data: number[][];
}

export interface KoruzaState {
  serialNumber: string;
  connected: boolean;
  leds: LedsState;
  errors: ErrorState;
  motors: MotorState;
  sfps: SfpStateMap;
  cameraCalibration: CameraCalibrationState;
  survey: Survey;
  network: NetworkState;
  isFetching: boolean;
  lastUpdated: Date;
}

const initialState: KoruzaState = {
  serialNumber: '0000',
  connected: false,
  leds: {
    state: true,
  },
  errors: {
    code: 0,
  },
  motors: {
    x: 0,
    y: 0,
    rangeX: 25000,
    rangeY: 25000
  },
  sfps: {},
  cameraCalibration: {
    port: environment.webcam.port,
    path: environment.webcam.path,
    width: 1280,
    height: 720,
    offsetX: 0,
    offsetY: 0,
    distance: 7000
  },
  survey: {
    coverage: {
      x: 10000,
      y: 10000,
    },
    bins: {
      x: 100,
      y: 100,
    },
    data: [],
  },
  network: {
    interface: '',
    ipAddress: '',
    ready: false,
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
        serialNumber: status.serial_number,
        connected: status.connected,
        leds: {
          state: status.leds.state,
        },
        errors: {
          code: status.errors.code,
        },
        motors: {
          x: status.motors.x,
          y: status.motors.y,
          rangeX: status.motors.range_x || 25000,
          rangeY: status.motors.range_y || 25000
        },
        sfps: status.sfps,
        cameraCalibration: {
          port: status.camera_calibration.port || environment.webcam.port,
          path: status.camera_calibration.path || environment.webcam.path,
          width: status.camera_calibration.width || 1280,
          height: status.camera_calibration.height || 720,
          offsetX: status.camera_calibration.offset_x,
          offsetY: status.camera_calibration.offset_y,
          distance: status.camera_calibration.distance || 7000
        },
        network: {
          interface: status.network.interface,
          ipAddress: status.network.ip_address,
          ready: status.network.ready,
        },
        isFetching: false,
        lastUpdated: new Date()
      });
    }
    case KoruzaActions.SURVEY_COMPLETE: {
      const survey = action.payload.survey;

      return Object.assign({}, state, {
        survey: {
          coverage: {
            x: survey.coverage.x,
            y: survey.coverage.y,
          },
          bins: {
            x: survey.bins.x,
            y: survey.bins.y,
          },
          data: survey.data
        }
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

export function getSurvey() {
  return (state: Observable<KoruzaState>) =>
    state.select(s => s.survey);
}
