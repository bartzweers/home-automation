import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsAppComponent } from './lights-app.component';

describe('LightsAppComponent', () => {
  let component: LightsAppComponent;
  let fixture: ComponentFixture<LightsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
