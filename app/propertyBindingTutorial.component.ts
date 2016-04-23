import {Component} from 'angular2/core'

@Component({
    selector: 'propertyBindingTutorial',
    template: `<h3>Propery Binding</h3>    
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