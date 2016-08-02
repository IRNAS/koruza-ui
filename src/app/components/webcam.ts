import * as _ from 'lodash';
import {Component} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {environment} from '../environment';

@Component({
  selector: 'webcam',
  template: `
    <md-card class="camera-container">
      <img src="{{cameraUrl}}" class="camera" />
    </md-card>
  `,
  styleUrls: ['app/components/webcam.css'],
  directives: [
    MD_CARD_DIRECTIVES
  ]
})
export class WebcamComponent {
  /**
   * Returns the URL of the camera image.
   */
  private get cameraUrl(): string {
    const config: any = _.defaults({}, environment.webcam, {
      host: window.location.host,
      port: window.location.port
    });

    return `http://${config.host}:${config.port}${config.path}`;
  }
}
