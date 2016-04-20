// core fo angular2 . always need it
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';


// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app',

    // the event bubling form the button to the div  
    template: `
    <div (click) = "onDivClick()">
      <button type="button" class="btn btn-primary" (click) = "onClick($event)">Submit</button>
      <button on-click = "onClick()">Submit</button>
    </div>
    `,
    // including those 2 components
   directives:[ CORE_DIRECTIVES, FORM_DIRECTIVES]
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