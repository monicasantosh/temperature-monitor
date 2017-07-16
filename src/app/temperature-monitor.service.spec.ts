/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TemperatureMonitorService } from './temperature-monitor.service';

describe('TemperatureMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureMonitorService]
    });
  });

  it('should ...', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
