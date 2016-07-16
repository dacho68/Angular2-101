// core of angular2. always need it
import {Component} from '@angular/core';


// import the components
import {Bubbles} from './bubbles.component';
import {Bars} from './bars.component';
import {Bars2} from './bars2.component';
// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app', 
    template: `<h1>Welcome to Angular 2 - d3JS</h1>
              <bars [values]="[23, 34, 12, 33, 25, 2,6]"></bars>
              <bars2 [values]="[4, 8, 15, 16, 23, 42]"></bars2>
              <bubbles [values]="[1000, 25000, 3000000, 120000, 25, 10203]"></bubbles>
              `,
    // including those  components
   directives:[ Bubbles,Bars,Bars2 ]
})

export class AppComponent {
 
  
}