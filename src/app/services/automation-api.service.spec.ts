import { TestBed, inject } from '@angular/core/testing';

import { AutomationApiService } from './automation-api.service';

describe('AutomationApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutomationApiService]
    });
  });

  it('should be created', inject([AutomationApiService], (service: AutomationApiService) => {
    expect(service).toBeTruthy();
  }));
});
