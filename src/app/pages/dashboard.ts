import {Component} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import {WebcamComponent} from '../components/webcam';

@Component({
  selector: 'dashboard-page',
  template: `
    <div>
      WIP: Dashboard

      <webcam></webcam>
    </div>
  `,
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    WebcamComponent
  ]
})
export class DashboardPageComponent {
}
