//import {select} from '../node_modules/types-d3/lib/d3-selection.d';

 declare var d3;
// Exports the visualization module
export class Bars2Chart {
    target: HTMLElement;
    constructor(target: HTMLElement) {
        this.target = target;
    }
 
    render(data : number[]) {

        var width = 420,
        barHeight = 20;
  
  
        var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, width]);
    
        var chart = d3.select(this.target)
        .attr("width", width)
        .attr("height", barHeight * data.length);

        var bar = chart.selectAll('g')
        .data(data)
        .enter().append("g")
        // For each new data point, append a circle to the target SVG
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

        bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

        bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; }); 
        
    }
 
    destroy() {
    }
}