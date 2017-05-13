import * as _ from 'lodash';
import {Component, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';

import {environment} from '../../environments/environment';
import {CameraCalibrationState, MotorState} from '../reducers/koruza';

const WEBCAM_CENTER_WIDTH = 40;
const WEBCAM_CENTER_HEIGHT = 40;

const PX_PER_MM = 18225;
const PX_PER_MM_AT_WEBCAM = {x: 2592, y: 1944};

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

enum MouseMode {
  NONE = 0,
  MOVE,
  SET_CALIBRATION
}

@Component({
  selector: 'koruza-webcam',
  template: `
    <md-card class="camera-container">
      <div layout="column" alignItems="center">
        <div flex layout="column" alignItems="center">
          <div>
            <span>Mode:</span>
            <md-button-toggle-group name="alignment" [(ngModel)]="mouseMode">
              <md-button-toggle [value]="0">None</md-button-toggle>
              <md-button-toggle [value]="1">Movement</md-button-toggle>
              <md-button-toggle [value]="2">Calibration</md-button-toggle>
            </md-button-toggle-group>
            <span>Steps:</span>
            <md-button-toggle-group name="steps" [(ngModel)]="arrowSteps">
              <md-button-toggle [value]="1">1</md-button-toggle>
              <md-button-toggle [value]="10">10</md-button-toggle>
              <md-button-toggle [value]="100">100</md-button-toggle>
              <md-button-toggle [value]="1000">1000</md-button-toggle>
            </md-button-toggle-group>
          </div>
          <div>
            &nbsp;
          </div>
          <div>
            <button md-icon-button (click)="onMoveClick({y: 1})" [disabled]="!cameraImageLoaded" [disableRipple]="true">
                <md-icon>keyboard_arrow_up</md-icon>
            </button>
          </div>
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
              *ngIf="!!cameraUrl && !cameraImageError"
            />

            <div *ngIf="!cameraImageLoaded">
              <md-spinner *ngIf="!cameraImageError"></md-spinner>
              <div *ngIf="cameraImageError">Camera image unavailable.</div>
            </div>

            <svg
              class="bounding-box"
              (click)="onCameraImageClick($event)"
              (mousemove)="onCameraImageMouseMove($event)"
              (mouseleave)="onCameraImageMouseLeave()"
              *ngIf="cameraImageLoaded"
            >
              <path [attr.d]="bbPath" fill="transparent" stroke="lime" stroke-width="2" />

              <g *ngIf="mouseOverlay" transform="translate(10, 5)" class="mouse-coordinates">
                <text x="0" y="0">
                  <tspan x="0" dy="1.2em">Webcam: X={{mouseWebcam.x | number:'1.0-0'}} Y={{mouseWebcam.y | number:'1.0-0'}}</tspan>
                  <tspan x="0" dy="1.2em">Motors: X={{mouseMotors.x | number:'1.0-0'}} Y={{mouseMotors.y | number:'1.0-0'}}</tspan>
                </text>
              </g>
            </svg>

            <div
              class="camera-center"
              [style.width.px]="centerBox.width"
              [style.height.px]="centerBox.height"
              [style.left.px]="centerBox.left"
              [style.top.px]="centerBox.top"
              *ngIf="cameraImageLoaded && centerBox.visible"
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
  // Calibration set event.
  @Output() private calibrationSet: EventEmitter<WebcamCoordinates> = new EventEmitter<WebcamCoordinates>();

  @ViewChild('cameraImage') private cameraImage: ElementRef;

  public cameraImageLoaded: boolean = false;
  public cameraImageError: boolean = false;

  private baseWidth: number = 0;
  private baseHeight: number = 0;
  private baseOffsetLeft: number = 0;
  private baseOffsetTop: number = 0;

  public mouseMode: MouseMode = MouseMode.NONE;
  private mouseOverlay: boolean = false;
  private mouse: Coordinate = {x: 0, y: 0};
  private mouseWebcam: Coordinate = {x: 0, y: 0};
  private mouseMotors: Coordinate = {x: 0, y: 0};

  public arrowSteps: number = 1000;

  /**
   * Returns the URL of the camera image.
   */
  public get cameraUrl(): string {
    if (!this.calibration.path) return null;
    const config: any = _.defaults({}, this.calibration, environment.webcam, {
      host: window.location.hostname,
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

  private onCameraImageMouseMove(event: MouseEvent): void {
    const boundingBox = this.cameraImage.nativeElement.getBoundingClientRect();

    let x = event.clientX - boundingBox.left;
    let y = event.clientY - boundingBox.top;

    this.mouseOverlay = true;
    this.mouse = {x, y};
    this.mouseWebcam = this.mapBrowserToWebcam({x, y});
    this.mouseMotors = this.mapReferenceToMotor(this.mapWebcamToReference(this.mouseWebcam));
  }

  private onCameraImageMouseLeave(): void {
    this.mouseOverlay = false;
  }

  private onCameraImageClick(event: MouseEvent): void {
    const boundingBox = this.cameraImage.nativeElement.getBoundingClientRect();

    let x = event.clientX - boundingBox.left;
    let y = event.clientY - boundingBox.top;

    // Inverse transformation to motor coordinates.
    const webcam = this.mapBrowserToWebcam({x, y});
    const reference = this.mapWebcamToReference(webcam);
    const motor = this.mapReferenceToMotor(reference);

    switch (this.mouseMode) {
      case MouseMode.MOVE: {
        this.cameraClick.emit(motor);
        break;
      }

      case MouseMode.SET_CALIBRATION: {
        this.calibrationSet.emit(webcam);
        this.mouseMode = MouseMode.NONE;
        break;
      }

      default: break;
    }

  }

  public onMoveClick(where): void {
    this.cameraClick.emit({
      x: this.motors.x + this.arrowSteps * (where.x || 0),
      y: this.motors.y + this.arrowSteps * (where.y || 0)
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

    x = Math.min(this.baseWidth, Math.max(0, ratio.x * x));
    y = Math.min(this.baseHeight, Math.max(0, ratio.y * y));

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
   * Returns the number of pixels per millimeter when converting from the
   * reference coordinate system to the webcam coordinate system. This value
   * depends on the camera resolution.
   */
  private getPixelsPerMm(): number {
    const ratio = {
      x: this.calibration.width / PX_PER_MM_AT_WEBCAM.x,
      y: this.calibration.height / PX_PER_MM_AT_WEBCAM.y
    };

    return ((ratio.x + ratio.y) / 2) * PX_PER_MM;
  }

  /**
   * Maps coordinates in reference coordinate system to coordinates in webcam
   * coordinate system.
   */
  private mapReferenceToWebcam({x, y}: Coordinate): Coordinate {
    const pixelsPerMm = this.getPixelsPerMm();
    const transform = ({x, y}: Coordinate) => {
      return {
        x: x * pixelsPerMm / this.calibration.distance,
        y: -y * pixelsPerMm / this.calibration.distance
      };
    };

    // Reference position (0, 0) should be in the calibration center when motors are at (0, 0).
    const motorOrigin = transform(this.mapMotorToReference({x: 0, y: 0}));
    const motorCurrent = transform(this.mapMotorToReference(this.motors));
    ({x, y} = transform({x, y}));

    x = x + this.calibration.offsetX - (motorCurrent.x - motorOrigin.x);
    y = y + this.calibration.offsetY - (motorCurrent.y - motorOrigin.y);

    return {x, y};
  }

  /**
   * Maps coordinates in webcam coordinate system to coordinates in reference
   * coordinate system.
   */
  private mapWebcamToReference({x, y}: Coordinate): Coordinate {
    const pixelsPerMm = this.getPixelsPerMm();
    const transform = ({x, y}: Coordinate) => {
      return {
        x: x * pixelsPerMm / this.calibration.distance,
        y: -y * pixelsPerMm / this.calibration.distance
      };
    };

    // Reference position (0, 0) should be in the calibration center when motors are at (0, 0).
    const motorOrigin = transform(this.mapMotorToReference({x: 0, y: 0}));
    const motorCurrent = transform(this.mapMotorToReference(this.motors));

    x = x - this.calibration.offsetX + (motorCurrent.x - motorOrigin.x);
    y = y - this.calibration.offsetY + (motorCurrent.y - motorOrigin.y);

    x = x * this.calibration.distance / pixelsPerMm;
    y = -y * this.calibration.distance / pixelsPerMm;

    return {x, y};
  }

  /**
   * Returns the motor coordinate range.
   */
  private getMotorRange(): Coordinate {
    return {
      x: 0.5 * this.calibration.distance * Math.sin(ANGLE_PER_STEP * this.motors.rangeX * 2),
      y: 0.5 * this.calibration.distance * Math.sin(ANGLE_PER_STEP * this.motors.rangeY * 2)
    };
  }

  /**
   * Maps coordinates in motor coordinate system to coordinates in reference
   * coordinate system.
   */
  private mapMotorToReference({x, y}: Coordinate): Coordinate {
    const range = this.getMotorRange();

    x += this.motors.rangeX;
    y += this.motors.rangeY;

    x = Math.cos(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * x) - range.x) -
        Math.sin(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * y) - range.y);

    y = Math.sin(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * x) - range.x) +
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

    x -= this.motors.rangeX;
    y -= this.motors.rangeY;

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

    // Draw center and measuring lines of 120mm.
    const center = [
      {c: 'M', x: 0, y: 0},
      {c: 'L', x: 120, y: 0},
      {c: 'M', x: 0, y: 0},
      {c: 'L', x: 0, y: 120}
    ];

    for (const corner of center) {
      const mapped = this.mapWebcamToBrowser(this.mapReferenceToWebcam(corner));
      bbPath.push(`${corner.c}${mapped.x} ${mapped.y}`);
    }

    return bbPath.join(' ');
  }

  public get centerBox() {
    // Compute the size of the center overlay.
    const centerSize = this.mapWebcamToBrowser({x: WEBCAM_CENTER_WIDTH, y: WEBCAM_CENTER_HEIGHT});
    // Compute the current position of the center overlay.
    const centerWebcam = {x: this.calibration.offsetX, y: this.calibration.offsetY};
    const centerPosition = this.mapWebcamToBrowser(centerWebcam);

    return {
      visible: centerWebcam.x > 0 && centerWebcam.y > 0,
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
