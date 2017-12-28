import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainsAppComponent } from './curtains-app.component';

describe('CurtainsAppComponent', () => {
  let component: CurtainsAppComponent;
  let fixture: ComponentFixture<CurtainsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtainsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
