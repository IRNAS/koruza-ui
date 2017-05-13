import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppState, getKoruzaState} from '../reducers';
import {getCameraCalibration, getMotors} from '../reducers/koruza';
import {KoruzaActions} from '../actions';

import {WebcamCoordinates} from '../components/webcam';

@Component({
  selector: 'dashboard-page',
  template: `
    <div layout="row">
      <koruza-status
        [status]="unitStatus | async"
        (homingClick)="onHomingClick()"
      >
      </koruza-status>

      <koruza-webcam
        [calibration]="cameraCalibration | async"
        [motors]="motors | async"
        (cameraClick)="onWebcamClick($event)"
        (calibrationSet)="onWebcamCalibrationSet($event)"
        flex
      >
      </koruza-webcam>
    </div>
  `,
  styleUrls: ['dashboard.scss'],
})
export class DashboardPageComponent {
  public cameraCalibration = this.store
    .let(getKoruzaState())
    .let(getCameraCalibration());

  public motors = this.store
    .let(getKoruzaState())
    .let(getMotors());

  public unitStatus = this.store
    .let(getKoruzaState());

  constructor(private store: Store<AppState>,
              private koruzaActions: KoruzaActions) {
  }

  public onWebcamClick(coordinates: WebcamCoordinates): void {
    // Request the motors to move based on coordinates.
    this.store.dispatch(this.koruzaActions.moveMotors(coordinates.x, coordinates.y));
  }

  public onWebcamCalibrationSet(coordinates: WebcamCoordinates): void {
    // Request the driver to configure webcam calibration.
    this.store.dispatch(this.koruzaActions.setCalibration(
      Math.round(coordinates.x),
      Math.round(coordinates.y))
    );
  }

  public onHomingClick(): void {
    this.store.dispatch(this.koruzaActions.homing());
  }
}
