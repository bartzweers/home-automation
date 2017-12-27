import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsAppComponent } from './settings-app/settings-app.component';
import { ApplicationComponent } from './application.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ApplicationComponent,
    SettingsAppComponent
  ]
})
export class ApplicationModule {
}
