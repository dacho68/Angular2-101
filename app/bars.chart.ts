 declare var d3;
// Exports the visualization module
export class BarsChart {
    target: HTMLElement;
    constructor(target: HTMLElement) {
        this.target = target;
    }
 
    render(values: number[]) {
        var chart = d3.select(this.target);
        chart.selectAll('div')
        .data(values)
        .enter()
        // For each new data point, append a circle to the target SVG
        .append('div')
        .text(function(d) {return d})
        .style("width", function(d) { return d * 10 + "px"; });
    }
 
    destroy() {
    }
}