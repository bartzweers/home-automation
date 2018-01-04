import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { ApplicationModule } from './application/application.module';
import { DashboardIconComponent } from './dashboard/dashboard-view/dashboard-icon/dashboard-icon.component';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardViewComponent,
    DashboardIconComponent,
  ],
  imports: [
    BrowserModule,
    ApplicationModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
