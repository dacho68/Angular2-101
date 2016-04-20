// core fo angular2 . always need it
import {Component} from 'angular2/core';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'eventBindingTutorial',

    // the event bubling form the button to the div  
    template: `
    <h3>Event Binding</h3>
    <h4>There are 2 ways to do event binding.</h4>
    <p> Syntax 1 : Use the braket (click)="method in the component"</p>
    <p> Syntax 2 : on prefix on-click="method in the component </p>
    <button (click)="onClick()">Click 1</button> 
    <button on-click="onClick()">Click 2</button>          
               
               
    <div (click) = "onDivClick()">
      <button type="button" class="btn btn-primary" (click) = "onClick($event)">Submit</button>
      <button on-click = "onClick()">Submit</button>
    </div>
    `,
    // including 
   directives:[ ]
})

export class EventBindingTutorialComponent {
  
  onDivClick(){
      console.log ("Handle by Div");
  }
  
  onClick($event){
     // enable the line below will stop the event to be buble.
     // $event.stopPropagation();
      console.log("Clicked",$event);
  }
  
  
}