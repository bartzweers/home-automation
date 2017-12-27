import { Component, Input, OnInit } from '@angular/core';
import { DashboardView } from '../../interfaces/interfaces';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  private _view: DashboardView;

  @Input() set view(value: DashboardView){
    this._view = value;
  };

  constructor() { }

  ngOnInit() {
  }

}
