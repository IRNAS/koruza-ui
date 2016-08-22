import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppState, getKoruzaState} from '../reducers';
import {getCameraCalibration} from '../reducers/koruza';
import {KoruzaActions} from '../actions';

import {WebcamCoordinates} from '../components/webcam';

@Component({
  selector: 'dashboard-page',
  template: `
    <div layout="row">
      <koruza-status [status]="unitStatus | async"></koruza-status>

      <koruza-webcam
        [calibration]="cameraCalibration | async"
        (cameraClick)="onWebcamClick($event)"
        flex
      >
      </koruza-webcam>
    </div>
  `,
  styleUrls: ['dashboard.scss'],
})
export class DashboardPageComponent {
  private cameraCalibration = this.store
    .let(getKoruzaState())
    .let(getCameraCalibration());

  private unitStatus = this.store
    .let(getKoruzaState());

  constructor(private store: Store<AppState>,
              private koruzaActions: KoruzaActions) {
  }

  private onWebcamClick(coordinates: WebcamCoordinates): void {
    // Request the motors to move based on coordinates.
    this.store.let(getKoruzaState()).take(1).subscribe((state) => {
      let deltaX = Math.round(((coordinates.x - state.cameraCalibration.offsetX) / coordinates.maxX) * 20) * 10;
      let deltaY = Math.round(((coordinates.y - state.cameraCalibration.offsetY) / coordinates.maxY) * 20) * 10;

      this.store.dispatch(this.koruzaActions.moveMotors(state.motors.x + deltaX, state.motors.y + deltaY));
    });
  }
}
