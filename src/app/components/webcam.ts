import * as _ from 'lodash';
import {Component, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';

import {environment} from '../../environments/environment';

const WEBCAM_CENTER_WIDTH = 40;
const WEBCAM_CENTER_HEIGHT = 40;

/**
 * Webcam calibration data.
 */
export interface WebcamCalibration {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
}

export interface WebcamCoordinates {
  x: number;
  y: number;
}

@Component({
  selector: 'koruza-webcam',
  template: `
    <md-card class="camera-container">
      <div layout="column" alignItems="center">
        <div>
          <button md-icon-button (click)="onMoveClick({y: 1})" [disabled]="!cameraImageLoaded" [disableRipple]="true">
              <md-icon>keyboard_arrow_up</md-icon>
          </button>
        </div>
        <div flex layout="row" alignItems="center">
          <div>
            <button md-icon-button (click)="onMoveClick({x: -1})" [disabled]="!cameraImageLoaded" [disableRipple]="true">
              <md-icon>keyboard_arrow_left</md-icon>
            </button>
          </div>
          <div flex>
            <img
              #cameraImage
              class="camera"
              [src]="cameraUrl"
              [style.visibility]="cameraImageLoaded ? 'visible' : 'hidden'"
              (load)="onCameraImageLoad()"
              (error)="onCameraImageError()"
              (click)="onCameraImageClick($event)"
              (window:resize)="onResize($event)"
              *ngIf="!cameraImageError"
            />

            <div *ngIf="!cameraImageLoaded">
              <md-spinner *ngIf="!cameraImageError"></md-spinner>
              <div *ngIf="cameraImageError">Camera image unavailable.</div>
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
          </div>
          <div>
            <button md-icon-button (click)="onMoveClick({x: 1})" [disabled]="!cameraImageLoaded" [disableRipple]="true">
              <md-icon>keyboard_arrow_right</md-icon>
            </button>
          </div>
        </div>
        <div>
          <button md-icon-button (click)="onMoveClick({y: -1})" [disabled]="!cameraImageLoaded" [disableRipple]="true">
            <md-icon>keyboard_arrow_down</md-icon>
          </button>
        </div>
      </div>
    </md-card>
  `,
  styleUrls: ['webcam.scss'],
})
export class WebcamComponent {
  // Calibration data.
  @Input() private calibration: WebcamCalibration;
  // Click event.
  @Output() private cameraClick: EventEmitter<WebcamCoordinates> = new EventEmitter<WebcamCoordinates>();

  @ViewChild('cameraImage') private cameraImage: ElementRef;

  private cameraImageLoaded: boolean = false;
  private cameraImageError: boolean = false;

  private baseWidth: number = 0;
  private baseHeight: number = 0;
  private baseOffsetLeft: number = 0;
  private baseOffsetTop: number = 0;
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

  private onCameraImageError(): void {
    this.cameraImageLoaded = false;
    this.cameraImageError = true;
  }

  private onCameraImageClick(event: MouseEvent): void {
    const boundingBox = this.cameraImage.nativeElement.getBoundingClientRect();
    const ratioWidth = this.cameraImage.nativeElement.offsetWidth / this.calibration.width;
    const ratioHeight = this.cameraImage.nativeElement.offsetHeight / this.calibration.height;

    const x = (event.clientX - boundingBox.left) / ratioWidth;
    const y = this.calibration.height - (event.clientY - boundingBox.top) / ratioHeight;

    let deltaX = Math.round(((x - this.calibration.offsetX) / this.calibration.width) * 20) * 100;
    let deltaY = Math.round(((y - this.calibration.offsetY) / this.calibration.height) * 20) * 100;

    // Emit translated coordinates.
    this.cameraClick.emit({
      x: deltaX,
      y: deltaY,
    });
  }

  private onMoveClick(where): void {
    this.cameraClick.emit({
      x: 1000 * (where.x || 0),
      y: 1000 * (where.y || 0)
    });
  }

  private recomputeCenterGeometry(): void {
    this.baseWidth = this.cameraImage.nativeElement.offsetWidth;
    this.baseHeight = this.cameraImage.nativeElement.offsetHeight;
    this.baseOffsetLeft = this.cameraImage.nativeElement.offsetLeft;
    this.baseOffsetTop = this.cameraImage.nativeElement.offsetTop;

    // Compute offset based on the actual image size and calibrated offset.
    const ratioWidth = this.baseWidth / this.calibration.width;
    const ratioHeight = this.baseHeight / this.calibration.height;
    this.centerWidth = ratioWidth * WEBCAM_CENTER_WIDTH;
    this.centerHeight = ratioHeight * WEBCAM_CENTER_HEIGHT;

    const offsetX = Math.min(this.calibration.width, this.calibration.offsetX);
    const offsetY = Math.min(this.calibration.height, this.calibration.offsetY);
    this.centerOffsetLeft = this.baseOffsetLeft + Math.max(0, ratioWidth * offsetX - this.centerWidth / 2);
    this.centerOffsetTop = this.baseOffsetTop + Math.max(0, ratioHeight * offsetY - this.centerHeight / 2);
  }
}
