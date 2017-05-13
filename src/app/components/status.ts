import * as _ from 'lodash';
import {Component, Input} from '@angular/core';

import {KoruzaState, SfpState} from '../reducers/koruza';

const ERROR_ENCODER_X_NOT_CONNECTED = 1 << 0;
const ERROR_ENCODER_Y_NOT_CONNECTED = 1 << 1;
const ERROR_ENCODER_X_MAG_LOW = 1 << 2;
const ERROR_ENCODER_Y_MAG_LOW = 1 << 3;
const ERROR_ENCODER_X_MAG_HIGH = 1 << 4;
const ERROR_ENCODER_Y_MAG_HIGH = 1 << 5;

@Component({
  selector: 'koruza-status',
  template: `
    <div layout="column" class="container">
      <!-- MCU -->
      <div *ngIf="status.connected" class="status ok" flex layout="row">
        <md-icon>check_circle</md-icon>
        <span>MCU Connected</span>
      </div>

      <div *ngIf="!status.connected" class="status warning" flex layout="row">
        <md-icon>warning</md-icon>
        <span>MCU Disconnected</span>
      </div>

      <div *ngIf="status.connected" flex layout="column">
        <span class="datum-name">Motor X</span>
        <span>{{status.motors.x}}</span>
        <span class="datum-name">Motor Y</span>
        <span>{{status.motors.y}}</span>
      </div>

      <div *ngIf="hasErrors" class="status warning" flex layout="row">
        <md-icon>warning</md-icon>
        <span>MCU Error</span>
      </div>

      <div *ngIf="hasErrors" flex layout="column">
        <span class="error" *ngFor="let error of errors">{{error}}</span>
      </div>

      <!-- SFP -->
      <div *ngIf="sfpConnected" class="status ok" flex layout="row">
        <md-icon>check_circle</md-icon>
        <span>SFP Connected</span>
      </div>

      <div *ngIf="!sfpConnected" class="status warning" flex layout="row">
        <md-icon>warning</md-icon>
        <span>SFP Disconnected</span>
      </div>

      <div *ngIf="sfpConnected" flex layout="column">
        <span class="datum-name">Serial Number</span>
        <span>{{sfp.serialNumber}}</span>
        <span class="datum-name">TX Wavelength</span>
        <span>{{sfp.wavelength}} nm</span>
        <span class="datum-name">RX Power</span>
        <span>{{sfp.diagnostics.rxPower}} ({{sfp.diagnostics.rxPower | dbm}} dBm)</span>
        <span class="datum-name">TX Power</span>
        <span>{{sfp.diagnostics.txPower}} ({{sfp.diagnostics.txPower | dbm}} dBm)</span>
      </div>
    </div>
  `,
  styleUrls: ['status.scss'],
})
export class StatusComponent {
  // Unit status report.
  @Input() public status: KoruzaState;

  public get hasErrors(): boolean {
    return _.isNumber(this.status.errors.code) && this.status.errors.code > 0;
  }

  public get errors(): string[] {
    if (!this.hasErrors) return [];

    let result: string[] = [];
    const code = this.status.errors.code;
    if (code & ERROR_ENCODER_X_NOT_CONNECTED) result.push("Encoder X not connected.");
    if (code & ERROR_ENCODER_Y_NOT_CONNECTED) result.push("Encoder Y not connected.");
    if (code & ERROR_ENCODER_X_MAG_LOW) result.push("Encoder X field too low.");
    if (code & ERROR_ENCODER_Y_MAG_LOW) result.push("Encoder Y field too low.");
    if (code & ERROR_ENCODER_X_MAG_HIGH) result.push("Encoder X field too high.");
    if (code & ERROR_ENCODER_Y_MAG_HIGH) result.push("Encoder Y field too high.");
    return result;
  }

  public get sfpConnected(): boolean {
    return !_.isEmpty(this.status.sfps);
  }

  public get sfp(): SfpState {
    return _.first(_.values<SfpState>(this.status.sfps));
  }
}
