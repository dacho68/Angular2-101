// core fo angular2 . always need it
import {Component} from 'angular2/core';


// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app',
  
  
    // the event bubling form the button to the div  
    template: `
    <div (click) = "onDivClick()">

      <button (click) = "onClick($event)">Submit</button>
      <button on-click = "onClick()">Submit</button>
    </div>
    `,
    // including those 2 components
   directives:[]
})
export class AppComponent {
  
  onDivClick(){
      console.log ("Handle by Div");
  }
  
  onClick($event){
     // enable the line below will stop the event to be buble.
     // $event.stopPropagation();
      console.log("Clicked",$event);
  }
  
  
}