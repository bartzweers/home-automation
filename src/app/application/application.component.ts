import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../interfaces/interfaces';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  private _application: Application;
  private applicationService: ApplicationService;

  private iconElement: any;

  @Input()
  set application(application: Application) {
    this._application = application;

    if (!this.iconElement) {
      this.iconElement = document.querySelector('.application-window__title-bar__app-icon') as any;
    }
    this.iconElement.style.backgroundImage = `/assets/icons/${this.icon}.svg`;
  }

  get application() {
    return this._application;
  }

  get name() {
    return this._application ? this._application.name : null;
  }

  get icon() {
    return this._application ? this._application.icon : null;
  }

  public closeApplication() {
    this.applicationService.openApplication(null);
  }

  constructor(applicationService: ApplicationService) {
    this.applicationService = applicationService;
  }

  ngOnInit() {
  }

}
