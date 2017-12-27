import { Component, OnInit } from '@angular/core';
import { DashboardView } from '../interfaces/interfaces';
import { AutomationApiService } from '../services/automation-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public DashboardViews$: Observable<Array<DashboardView>>;

  constructor() {
    this.DashboardViews$ = AutomationApiService.getDashboardViews();
  }

  ngOnInit() {
  }

}
