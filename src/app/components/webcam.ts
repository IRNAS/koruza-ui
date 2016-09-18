import * as _ from 'lodash';
import {Component, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';

import {environment} from '../../environments/environment';
import {CameraCalibrationState, MotorState} from '../reducers/koruza';

const WEBCAM_CENTER_WIDTH = 40;
const WEBCAM_CENTER_HEIGHT = 40;

const PX_PER_MM = 1050;

const STEPS_PER_ROTATION = 4096;
const ROTATION_DISTANCE = 0.8;
const LEAVER = 115.8;
const ANGLE_PER_STEP = Math.atan(ROTATION_DISTANCE / (STEPS_PER_ROTATION * LEAVER));
// TODO: Get the rotation angle from somewhere.
const ROTATION_ANGLE = 0;

export interface WebcamCoordinates {
  x: number;
  y: number;
}

interface Coordinate {
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
          <div flex class="camera-image-container">
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

            <svg
              class="bounding-box"
              (click)="onCameraImageClick($event)"
              *ngIf="cameraImageLoaded"
            >
              <path [attr.d]="bbPath" fill="transparent" stroke="lime" stroke-width="2" />
            </svg>

            <div
              class="camera-center"
              [style.width.px]="centerBox.width"
              [style.height.px]="centerBox.height"
              [style.left.px]="centerBox.left"
              [style.top.px]="centerBox.top"
              *ngIf="cameraImageLoaded"
            >
              <md-icon
                class="camera-cross"
                [style.left.px]="centerBox.width / 4"
                [style.top.px]="centerBox.height / 4"
                [style.width.px]="centerBox.width / 2"
                [style.height.px]="centerBox.height / 2"
                [style.fontSize.px]="(centerBox.width + centerBox.height) / 4"
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
  @Input() private calibration: CameraCalibrationState;
  // Motor position data.
  @Input() private motors: MotorState;
  // Click event.
  @Output() private cameraClick: EventEmitter<WebcamCoordinates> = new EventEmitter<WebcamCoordinates>();

  @ViewChild('cameraImage') private cameraImage: ElementRef;

  private cameraImageLoaded: boolean = false;
  private cameraImageError: boolean = false;

  private baseWidth: number = 0;
  private baseHeight: number = 0;
  private baseOffsetLeft: number = 0;
  private baseOffsetTop: number = 0;

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

    let x = event.clientX - boundingBox.left;
    let y = event.clientY - boundingBox.top;

    // Inverse transformation to motor coordinates.
    this.cameraClick.emit(this.mapReferenceToMotor(this.mapWebcamToReference(this.mapBrowserToWebcam({x, y}))));
  }

  private onMoveClick(where): void {
    this.cameraClick.emit({
      x: this.motors.x + 1000 * (where.x || 0),
      y: this.motors.y + 1000 * (where.y || 0)
    });
  }

  /**
   * Returns the width and height ratios between browser and webcam coordinates.
   */
  private ratioBrowserToWebcam(): Coordinate {
    return {
      x: this.baseWidth / this.calibration.width,
      y: this.baseHeight / this.calibration.height
    }
  }

  /**
   * Maps coordinates in webcam coordinate system to coordinates in browser
   * coordinate system.
   */
  private mapWebcamToBrowser({x, y}: Coordinate): Coordinate {
    const ratio = this.ratioBrowserToWebcam();

    x = Math.max(0, ratio.x * x);
    y = Math.max(0, ratio.y * y);

    return {x, y};
  }

  /**
   * Maps coordinates in browser coordinate system to coordinates in webcam
   * coordinate system.
   */
  private mapBrowserToWebcam({x, y}: Coordinate): Coordinate {
    const ratio = this.ratioBrowserToWebcam();

    x = x / ratio.x;
    y = y / ratio.y;

    return {x, y};
  }

  /**
   * Maps coordinates in reference coordinate system to coordinates in webcam
   * coordinate system.
   */
  private mapReferenceToWebcam({x, y}: Coordinate): Coordinate {
    x = x * PX_PER_MM / this.calibration.distance;
    y = y * PX_PER_MM / this.calibration.distance;

    // Reference position (0, 0) is in the calibration center.
    x += this.calibration.offsetX;
    y += this.calibration.offsetY;

    return {x, y};
  }

  /**
   * Maps coordinates in webcam coordinate system to coordinates in reference
   * coordinate system.
   */
  private mapWebcamToReference({x, y}: Coordinate): Coordinate {
    // Reference position (0, 0) is in the calibration center.
    x -= this.calibration.offsetX;
    y -= this.calibration.offsetY;

    x = x * this.calibration.distance / PX_PER_MM;
    y = y * this.calibration.distance / PX_PER_MM;

    return {x, y};
  }

  /**
   * Returns the motor coordinate range.
   */
  private getMotorRange(): Coordinate {
    return {
      x: 0.5 * this.calibration.distance * Math.sin(ANGLE_PER_STEP * this.motors.rangeX),
      y: 0.5 * this.calibration.distance * Math.sin(ANGLE_PER_STEP * this.motors.rangeY)
    };
  }

  /**
   * Maps coordinates in motor coordinate system to coordinates in reference
   * coordinate system.
   */
  private mapMotorToReference({x, y}: Coordinate): Coordinate {
    const range = this.getMotorRange();

    x = Math.cos(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * x) - range.x) -
        Math.sin(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * y) - range.x);

    y = Math.sin(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * x) - range.y) +
        Math.cos(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * y) - range.y);

    return {x, y};
  }

  /**
   * Maps coordinates in reference coordinate system to coordinates in motor
   * coordinate system.
   */
  private mapReferenceToMotor({x, y}: Coordinate): Coordinate {
    const range = this.getMotorRange();

    x = (1.0 / ANGLE_PER_STEP) * Math.asin((x * Math.cos(ROTATION_ANGLE) + y * Math.sin(ROTATION_ANGLE) + range.x) / this.calibration.distance);
    y = (1.0 / ANGLE_PER_STEP) * Math.asin((-x * Math.sin(ROTATION_ANGLE) + y * Math.cos(ROTATION_ANGLE) + range.x) / this.calibration.distance);

    x = Math.round(Math.max(-this.motors.rangeX, Math.min(this.motors.rangeX, x)));
    y = Math.round(Math.max(-this.motors.rangeY, Math.min(this.motors.rangeX, y)));

    return {x, y};
  }

  private get bbPath(): string {
    // Compute the corners of the bounding box.
    const corners = [
      {x: -this.motors.rangeX, y: this.motors.rangeY},
      {x: this.motors.rangeX, y: this.motors.rangeY},
      {x: this.motors.rangeX, y: -this.motors.rangeY},
      {x: -this.motors.rangeX, y: -this.motors.rangeY}
    ];

    // Generate the SVG path for the bounding box.
    let bbPath: string[] = [];
    for (const corner of corners) {
      const mapped = this.mapWebcamToBrowser(this.mapReferenceToWebcam(this.mapMotorToReference(corner)));
      const command = _.isEmpty(bbPath) ? 'M' : 'L';
      bbPath.push(`${command}${mapped.x} ${mapped.y}`);
    }
    bbPath.push('Z');
    return bbPath.join(' ');
  }

  private get centerBox() {
    // Compute the size of the center overlay.
    const centerSize = this.mapWebcamToBrowser({x: WEBCAM_CENTER_WIDTH, y: WEBCAM_CENTER_HEIGHT});
    // Compute the current position of the center overlay.
    const centerPosition = this.mapWebcamToBrowser(
      this.mapReferenceToWebcam(
        this.mapMotorToReference(this.motors)
      )
    );

    return {
      left: this.baseOffsetLeft + Math.max(0, centerPosition.x - centerSize.x / 2),
      top: this.baseOffsetTop + Math.max(0, centerPosition.y - centerSize.y / 2),
      width: centerSize.x,
      height: centerSize.y
    };
  }

  private recomputeCenterGeometry(): void {
    this.baseWidth = this.cameraImage.nativeElement.offsetWidth;
    this.baseHeight = this.cameraImage.nativeElement.offsetHeight;
    this.baseOffsetLeft = this.cameraImage.nativeElement.offsetLeft;
    this.baseOffsetTop = this.cameraImage.nativeElement.offsetTop;
  }
}
