// Loads some required modules from Angular.
import {Component, Input, OnChanges, AfterViewInit, ViewChild} from '@angular/core';
// Loads the code needed to manipulate the visualization
import {BarsChart} from './bars.chart';
 
// Identifies the class as a component directive that will be associated
// with `bubbles` elements in the DOM, and will include the specified markup as its template
@Component({
    selector: 'bars',
    template: '<div #target class="chart"></div>'
})
export class Bars implements OnChanges, AfterViewInit {
  // Declares values as a data-bound property
    @Input() values: number[];
  // Gets a reference to the child DOM node
    @ViewChild('target') target;
  // An instance of the BubblesChart
    chart: BarsChart;
 
    constructor() {
    }
 
  // Lifecycle hook that is invoked when data-bound properties change
    ngOnChanges(changes) {
        if (this.chart) {
            this.chart.render(changes.values);
        }
    }
 
  // Lifecycle hook for when the component's view has been fully initialized
    ngAfterViewInit() {
    // We have to wait until the view has been initialized before we can get the
    //DOM element to bind the chart to it
        this.chart = new BarsChart(this.target.nativeElement);
        this.chart.render(this.values);
    }
 
}