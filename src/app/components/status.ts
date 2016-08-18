import {Component, Input} from '@angular/core';

@Component({
  selector: 'koruza-status',
  template: `
    <div layout="column">
      <div *ngIf="status.connected" class="status ok" flex layout="row">
        <md-icon>check_circle</md-icon>
        <span>MCU Connected</span>
      </div>

      <div *ngIf="!status.connected" class="status warning" flex layout="row">
        <md-icon>warning</md-icon>
        <span>MCU Disconnected</span>
      </div>
    </div>
  `,
  styleUrls: ['app/components/status.css'],
})
export class StatusComponent {
  // Unit status report.
  @Input() private status: any;
}
