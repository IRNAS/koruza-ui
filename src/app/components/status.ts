import * as _ from 'lodash';
import {Component, Input} from '@angular/core';

import {SfpState} from '../reducers/koruza';

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
        <span>Motor X: {{status.motors.x}}</span>
        <span>Motor Y: {{status.motors.y}}</span>
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
        <span>RX Power: {{sfp.diagnostics.rxPower}}</span>
        <span>TX Power: {{sfp.diagnostics.txPower}}</span>
      </div>
    </div>
  `,
  styleUrls: ['status.scss'],
})
export class StatusComponent {
  // Unit status report.
  @Input() private status: any;

  private get sfpConnected(): boolean {
    return !_.isEmpty(this.status.sfps);
  }

  private get sfp(): SfpState {
    return _.first(_.values<SfpState>(this.status.sfps));
  }
}
