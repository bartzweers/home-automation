import { Component, Input, OnDestroy, Renderer2 } from '@angular/core';
import { Application } from '../interfaces/interfaces';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnDestroy {

  private _application: Application;
  private applicationService: ApplicationService;

  @Input()
  set application(application: Application) {
    this._application = application;
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


  constructor(private renderer: Renderer2, applicationService: ApplicationService) {
    this.applicationService = applicationService;
    this.renderer.addClass(document.body, 'modal-open');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

}
