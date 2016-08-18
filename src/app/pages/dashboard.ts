import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppState, getKoruzaState} from '../reducers';
import {getCameraCalibration} from '../reducers/koruza';

@Component({
  selector: 'dashboard-page',
  template: `
    <div layout="row">
      <koruza-status [status]="unitStatus | async"></koruza-status>
      <koruza-webcam [calibration]="cameraCalibration | async" flex></koruza-webcam>
    </div>
  `,
  styleUrls: ['app/pages/dashboard.css'],
})
export class DashboardPageComponent {
  private cameraCalibration = this.store
    .let(getKoruzaState())
    .let(getCameraCalibration());

  private unitStatus = this.store
    .let(getKoruzaState());

  constructor(private store: Store<AppState>) {
  }
}
