import { Component, OnInit } from '@angular/core';
import { Application, DashboardView } from '../interfaces/interfaces';
import { AutomationApiService } from '../services/automation-api.service';
import { Observable } from 'rxjs/Observable';
import { ApplicationService } from '../services/application.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ApplicationService]
})
export class DashboardComponent implements OnInit {

  private applicationService: ApplicationService;

  public DashboardViews$: Observable<DashboardView[]>;
  public openApplication = new BehaviorSubject<Application>(null);

  public config: SwiperOptions = {
    paginationClickable: false,
    spaceBetween: 30
  };

  constructor(applicationService: ApplicationService) {
    this.applicationService = applicationService;
    this.DashboardViews$ = AutomationApiService.getDashboardViews();

    this.applicationService.applicationHistory$.subscribe((application: Application | null) => {
      this.openApplication.next(application);
    });
  }

  ngOnInit() {
  }

}
