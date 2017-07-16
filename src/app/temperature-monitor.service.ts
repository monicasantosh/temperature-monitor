import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {
 temperatures:number[];

  constructor() 
  { 
    this.temperatures = [];
  }
 

  recordTemperature(temperature){
      this.temperatures.push(+temperature);
    return this.temperatures;
 }

 getCurrentMedian(temperatures){
   let temperaturesSize = temperatures.length,
     temperaturesSorted = temperatures.sort((n1,n2) => n1 - n2), temperaturesMedian = null;
   if (temperaturesSize % 2 === 0)
     temperaturesMedian = (temperaturesSorted[temperaturesSize / 2 - 1] + temperaturesSorted[temperaturesSize / 2]) / 2;
   else
     temperaturesMedian = temperaturesSorted[(temperaturesSize - 1) / 2];
   return temperaturesMedian;
 }

}
