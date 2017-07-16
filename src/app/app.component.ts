import { Component } from '@angular/core';
import { TemperatureMonitorService } from './temperature-monitor.service';
//import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TemperatureMonitorService]
})

export class AppComponent {
  title: string;
  temperatures: number[];
  newTemperature: number;
  errorMsg: string;
  temperaturesMedian: number;

  constructor(private _temperatureMonitorService: TemperatureMonitorService) {
    this.title = "";
    this.temperatures = [];
    this.newTemperature = null;
    this.errorMsg = "";
    this.temperaturesMedian = null;
  }
  ngOnInit() {
    this.title = 'Temperature Monitor';
    this.temperatures = this._temperatureMonitorService.temperatures;
    this.newTemperature = null;
    this.errorMsg = "";
    this.temperaturesMedian = null;
  }
  recordTemperature() {
    if (+this.newTemperature || +this.newTemperature === 0) {
      this.temperatures = this._temperatureMonitorService.recordTemperature(this.newTemperature);
      this.errorMsg = "";
    }
    else
      this.errorMsg = "Enter a valid numeric input.";
    this.newTemperature = null;
    this.temperaturesMedian = null;
  }
  getCurrentMedian() {
    this.temperaturesMedian = this._temperatureMonitorService.getCurrentMedian(this.temperatures);
  }
}
