// core fo angular2 . always need it
import {Component} from 'angular2/core';
// import the components

import {PropertyBindingTutorialComponent} from './propertyBindingTutorial.component';
import {EventBindingTutorialComponent} from './eventBindingTutorial.component';
import {ClassBindingTutorialComponent} from './classBindingTutorial.component';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app',

    // the event bubling form the button to the div  
    template: `<h1>Welcome to Angular 2 - 101</h1>
              <propertyBindingTutorial></propertyBindingTutorial><br>
              <classBindingTutorial></classBindingTutorial><br>
              <eventBindingTutorial></eventBindingTutorial><br>
              `,
    // including those 2 components
   directives:[ PropertyBindingTutorialComponent,ClassBindingTutorialComponent ,EventBindingTutorialComponent]
})

export class AppComponent {
 
  
}