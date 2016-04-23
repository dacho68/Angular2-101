import {Component} from 'angular2/core'

@Component({
    selector: 'propertyBindingTutorial',
    template: `<h3>Propery Binding</h3>
               <h4>One way binding from the Component to DOM</h4>
               <p>There are 3 ways to bind a property, see the img binding below.</p>
               <p> Syntax 1 : DOM property in the square braket []</p>
               <p> Syntax 2 : Prefix with the "bind&#45;" </p>
               <p> Syntax 3 : Interpolation <code>"&#123; &#123;    &#125;&#125;"</code> </p>
               
               <pre><code> 
                 <h5>{{ tilte }}</h5>
               
                 <img src="{{imageUrl}}" />
                 <img [src]="imageUrl" />
                 <img bind-src="imageUrl" />
                 
               </code></pre>
               <h5>{{ title }}</h5>
               
               <img src="{{imageUrl}}" />
               <img [src]="imageUrl" />
               <img bind-src="imageUrl" />
              ` ,
    providers: []
})
export class PropertyBindingTutorialComponent{
    title = "Angular App";
    imageUrl = "images/newyork.jpg";
//    imageUrl = "http://lorempixel.com/400/200/";
}