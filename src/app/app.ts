import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    MdButton,
    MdToolbar
  ],
  providers: [
    MdIconRegistry
  ]
})
export class AppComponent {
}
