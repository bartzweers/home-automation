import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsAppComponent } from './settings-app/settings-app.component';
import { ApplicationComponent } from './application.component';
import { LightsAppComponent } from './lights-app/lights-app.component';
import { CurtainsAppComponent } from './curtains-app/curtains-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ApplicationComponent,
    SettingsAppComponent,
    LightsAppComponent,
    CurtainsAppComponent
  ],
  exports: [
    ApplicationComponent
  ]
})
export class ApplicationModule {
}
