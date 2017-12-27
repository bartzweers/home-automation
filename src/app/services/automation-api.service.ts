import { Injectable } from '@angular/core';
import { Application, DashboardView } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class AutomationApiService {

  constructor() {
  }

  public static getDashboardViews(): Observable<DashboardView[]> {
    return Observable.of([{
      position: 0,
      applications: AutomationApiService.getAllApplications(),
      maxIcons: 9
    }]);
  }

  public static getAllApplications(): Application[] {
    return [
      {name: 'Settings', icon: 'settings'},
      {name: 'Lights', icon: 'settings'},
      {name: 'Curtains', icon: 'settings'}
    ]
  }

}
