import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Application } from '../../../interfaces/interfaces';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'app-dashboard-icon',
  templateUrl: './dashboard-icon.component.html',
  styleUrls: ['./dashboard-icon.component.scss']
})

export class DashboardIconComponent implements OnInit {

  private _application: Application;
  private applicationService: ApplicationService;

  @Input()
  set application(application: Application) {
    this._application = application;
  }

  public openApplication(application: Application) {
    this.applicationService.openApplication(application);
  }

  constructor(applicationService: ApplicationService) {
    this.applicationService = applicationService;
  }

  ngOnInit() {
  }

}
