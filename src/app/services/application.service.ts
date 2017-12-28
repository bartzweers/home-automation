import { Injectable } from '@angular/core';
import { Application } from '../interfaces/interfaces';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ApplicationService {

  public applicationHistory$: Observable<Application>;
  public currentApplication = new BehaviorSubject<Application>(null);

  public openApplication(application: Application){
    this.currentApplication.next(application);
  }


  constructor() {
    this.applicationHistory$ = this.currentApplication.asObservable();
  }

}
