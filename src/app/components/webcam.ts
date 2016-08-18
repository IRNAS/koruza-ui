import * as _ from 'lodash';
import {Component, Input, ViewChild, ElementRef} from '@angular/core';

import {environment} from '../environment';

const WEBCAM_WIDTH = 1280;
const WEBCAM_HEIGHT = 720;

const WEBCAM_CENTER_WIDTH = 40;
const WEBCAM_CENTER_HEIGHT = 40;

/**
 * Webcam calibration data.
 */
export interface WebcamCalibration {
  offsetX: number;
  offsetY: number;
}

@Component({
  selector: 'koruza-webcam',
  template: `
    <md-card class="camera-container">
      <img
        #cameraImage
        class="camera"
        [src]="cameraUrl"
        (load)="onCameraImageLoad()"
        (window:resize)="onResize(event)"
      />

      <div *ngIf="!cameraImageLoaded" layout="row">
        <div flex></div>
        <md-spinner></md-spinner>
        <div flex></div>
      </div>

      <div
        class="camera-center"
        [style.width.px]="centerWidth"
        [style.height.px]="centerHeight"
        [style.left.px]="centerOffsetLeft"
        [style.top.px]="centerOffsetTop"
        *ngIf="cameraImageLoaded"
      >
        <md-icon
          class="camera-cross"
          [style.left.px]="centerWidth / 4"
          [style.top.px]="centerHeight / 4"
          [style.width.px]="centerWidth / 2"
          [style.height.px]="centerHeight / 2"
          [style.fontSize.px]="(centerWidth + centerHeight) / 4"
        >
          add
        </md-icon>
      </div>
    </md-card>
  `,
  styleUrls: ['app/components/webcam.css'],
})
export class WebcamComponent {
  // Calibration data.
  @Input() private calibration: WebcamCalibration;

  @ViewChild('cameraImage') private cameraImage: ElementRef;

  private cameraImageLoaded: boolean = false;

  private centerWidth: number = 0;
  private centerHeight: number = 0;
  private centerOffsetLeft: number = 0;
  private centerOffsetTop: number = 0;

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

  private onResize(event): void {
    this.recomputeCenterGeometry();
  }

  private onCameraImageLoad(): void {
    this.cameraImageLoaded = true;
    this.recomputeCenterGeometry();
  }

  private recomputeCenterGeometry(): void {
    // Compute offset based on the actual image size and calibrated offset.
    const ratioWidth = this.cameraImage.nativeElement.offsetWidth / WEBCAM_WIDTH;
    const ratioHeight = this.cameraImage.nativeElement.offsetHeight / WEBCAM_HEIGHT;
    this.centerWidth = ratioWidth * WEBCAM_CENTER_WIDTH;
    this.centerHeight = ratioHeight * WEBCAM_CENTER_HEIGHT;
    this.centerOffsetLeft = ratioWidth * this.calibration.offsetX - this.centerWidth / 2;
    this.centerOffsetTop = ratioHeight * this.calibration.offsetY - this.centerHeight / 2;
  }
}
