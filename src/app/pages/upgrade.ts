import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppState} from '../reducers';
import {KoruzaActions} from '../actions';

@Component({
  selector: 'upgrade-page',
  template: `
    <div layout="row">
      <div flex="30"></div>
      <div>
        <md-card>
          <md-card-title>Software Upgrade</md-card-title>
          <md-card-content>
            Press the <i>Upgrade</i> button to upgrade this KORUZA unit's software to
            the latest version. Ensure that power is not disconnected while the upgrade
            takes place.
          </md-card-content>
          <md-card-actions>
            <button md-button (click)="onUpgradeClick()">START UPGRADE</button>
          </md-card-actions>
        </md-card>
      </div>
      <div flex="30"></div>
    </div>
  `,
})
export class UpgradePageComponent {
  constructor(private store: Store<AppState>,
              private koruzaActions: KoruzaActions,
              private dialog: MdDialog) {
  }

  public onUpgradeClick(): void {
    this.dialog.open(UpgradeInProgressDialog, {
      disableClose: true,
    });

    this.store.dispatch(this.koruzaActions.startUpgrade());

    // Ensure reload after 60 seconds.
    setTimeout(() => { location.reload(true); }, 60000);
  }
}

@Component({
  selector: 'upgrade-in-progress-dialog',
  template: `
    <h1 md-dialog-title>Software upgrade</h1>
    <div md-dialog-content class="mat-typography">
      <div class="column">
        <div>
          Software upgrade in progress, please wait. After the upgrade completes, this
          page will automatically reload.
        </div>
        <div>&nbsp;</div>
        <div>
          <b>WARNING: Do not disconnect power while upgrade is in progress.</b>
        </div>
        <div>&nbsp;</div>
        <div><md-progress-bar mode="indeterminate"></md-progress-bar></div>
      </div>
    </div>
  `
})
export class UpgradeInProgressDialog {
}
