import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-dashboard-icon',
  templateUrl: './dashboard-icon.component.html',
  styleUrls: ['./dashboard-icon.component.scss']
})

export class DashboardIconComponent implements OnInit {

  private _application: Application;

  @Input()
  set application(application: Application) {
    this._application = application;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
