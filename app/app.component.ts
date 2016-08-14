// core of angular2. always need it
import {Component} from '@angular/core';


// import the components
import {PropertyBindingTutorialComponent} from './propertyBindingTutorial.component';
import {ClassBindingTutorialComponent} from './classBindingTutorial.component';
import {EventBindingTutorialComponent} from './eventBindingTutorial.component';
import {TwoWayBindingTutorialComponent} from './twoWayBindingTutorial.component';
/* import {FavoriteComponent} from './favorite.component';
*/

// this is new to Angular 2.0
@Component({
    // element selector my-app
    moduleId: module.id,
    selector: 'my-app', 
    template: `<h1>Welcome to Angular 2 - 101</h1>
              <propertyBindingTutorial></propertyBindingTutorial><br>
              <classBindingTutorial></classBindingTutorial><br>
              <eventBindingTutorial></eventBindingTutorial><br>          
              <twoWayBindingTutorial></twoWayBindingTutorial><br>
              <!-- favorite></favorite -->
              `,
    // including those  components
   directives:[ PropertyBindingTutorialComponent,
               ClassBindingTutorialComponent ,
               EventBindingTutorialComponent,
               TwoWayBindingTutorialComponent,
              /*  FavoriteComponent*/ ]
})

export class AppComponent {
 
  
}