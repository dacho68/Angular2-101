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
    <p>we can pass the DOM event to the handler by using the $event. <p>
    <p> Syntax 1 : Use the braket (click)="event handler in the component"</p>
    <p> Syntax 2 : on prefix on-click="event handler in the component </p>
    <p> Use the console to see the message [F12]</p>
    
    <button (click)="onClick($event)">Click 1</button> 
    <button on-click="onClick($event)">Click 2</button>          
    <br>
    <h4>The event also bubles up their parent. if they are also interested in the event </h4>  
    <br>         
    <div (click) = "onDivClick()" >
      <button on-click = "onClick($event)">Buble up</button>
    </div>
    <br>
    <p>You can stop the propagation by calling stopPropagation at any level</p>
    
    <div (click) = "onDivClick()" >
      <button on-click = "onClickNoPropagation($event)">No Propagation</button>
    </div>
    `,
    // including 
   directives:[ ]
})

export class EventBindingTutorialComponent {
  
  onDivClick(){
      console.log ("Handled by Div");
  }
  
  onClick($event){
     // enable the line below will stop the event to be buble.
     // $event.stopPropagation();
      console.log("Clicked",$event);
  }

  onClickNoPropagation($event){
     // enable the line below will stop the event to be buble.
      $event.stopPropagation();
      console.log("Clicked and no propagation",$event);
  }  
  
}