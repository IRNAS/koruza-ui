import * as _ from 'lodash';
import {Component, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';

import {environment} from '../environments/environment';

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

export interface WebcamCoordinates {
  x: number;
  y: number;
  maxX: number;
  maxY: number;
}

@Component({
  selector: 'koruza-webcam',
  template: `
    <md-card class="camera-container">
      <div layout="column" alignItems="center">
        <div>
          <button md-icon-button (click)="onMoveClick({y: 1})" [disabled]="!cameraImageLoaded">
              <md-icon>keyboard_arrow_up</md-icon>
          </button>
        </div>
        <div flex layout="row" alignItems="center">
          <div>
            <button md-icon-button (click)="onMoveClick({x: -1})" [disabled]="!cameraImageLoaded">
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
            <button md-icon-button (click)="onMoveClick({x: 1})" [disabled]="!cameraImageLoaded">
              <md-icon>keyboard_arrow_right</md-icon>
            </button>
          </div>
        </div>
        <div>
          <button md-icon-button (click)="onMoveClick({y: -1})" [disabled]="!cameraImageLoaded">
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
    const ratioWidth = this.cameraImage.nativeElement.offsetWidth / WEBCAM_WIDTH;
    const ratioHeight = this.cameraImage.nativeElement.offsetHeight / WEBCAM_HEIGHT;

    const x = event.clientX - boundingBox.left;
    const y = event.clientY - boundingBox.top;

    // Emit translated coordinates.
    this.cameraClick.emit({
      x: x / ratioWidth,
      y: WEBCAM_HEIGHT - y / ratioHeight,
      maxX: WEBCAM_WIDTH,
      maxY: WEBCAM_HEIGHT
    });
  }

  private onMoveClick(where): void {
    this.cameraClick.emit({
      x: WEBCAM_WIDTH * (where.x || 0) / 2,
      y: WEBCAM_WIDTH * (where.y || 0) / 2,
      maxX: WEBCAM_WIDTH,
      maxY: WEBCAM_HEIGHT
    });
  }

  private recomputeCenterGeometry(): void {
    this.baseWidth = this.cameraImage.nativeElement.offsetWidth;
    this.baseHeight = this.cameraImage.nativeElement.offsetHeight;
    this.baseOffsetLeft = this.cameraImage.nativeElement.offsetLeft;
    this.baseOffsetTop = this.cameraImage.nativeElement.offsetTop;

    // Compute offset based on the actual image size and calibrated offset.
    const ratioWidth = this.baseWidth / WEBCAM_WIDTH;
    const ratioHeight = this.baseHeight / WEBCAM_HEIGHT;
    this.centerWidth = ratioWidth * WEBCAM_CENTER_WIDTH;
    this.centerHeight = ratioHeight * WEBCAM_CENTER_HEIGHT;

    const offsetX = Math.min(WEBCAM_WIDTH, this.calibration.offsetX);
    const offsetY = Math.min(WEBCAM_HEIGHT, this.calibration.offsetY);
    this.centerOffsetLeft = this.baseOffsetLeft + Math.max(0, ratioWidth * offsetX - this.centerWidth / 2);
    this.centerOffsetTop = this.baseOffsetTop + Math.max(0, ratioHeight * offsetY - this.centerHeight / 2);
  }
}
