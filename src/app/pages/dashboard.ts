import {Component} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppState, getKoruzaState} from '../reducers';
import {getCameraCalibration} from '../reducers/koruza';
import {WebcamComponent, WebcamCalibration} from '../components/webcam';

@Component({
  selector: 'dashboard-page',
  template: `
    <div>
      WIP: Dashboard

      <webcam [calibration]="cameraCalibration | async"></webcam>
    </div>
  `,
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    WebcamComponent
  ]
})
export class DashboardPageComponent {
  private cameraCalibration: Observable<WebcamCalibration> = this.store
    .let(getKoruzaState())
    .let(getCameraCalibration());

  constructor(private store: Store<AppState>) {
  }
}
