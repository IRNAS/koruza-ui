import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppState, getKoruzaState} from '../reducers';
import {getCameraCalibration} from '../reducers/koruza';

@Component({
  selector: 'dashboard-page',
  template: `
    <div layout="row">
      <div flex>
        Status report.
      </div>

      <webcam [calibration]="cameraCalibration | async" flex></webcam>
    </div>
  `
})
export class DashboardPageComponent {
  private cameraCalibration = this.store
    .let(getKoruzaState())
    .let(getCameraCalibration());

  constructor(private store: Store<AppState>) {
  }
}
