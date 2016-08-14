import {Component } from '@angular/core'

@Component({
    selector: 'twoWayBindingTutorial',
    template: `<h3>Two Way Binding</h3>
               <p> Manual way, where you define the binding and the event<p>
               <input type="text" [value]= "title" (input)="title=$event.target.value" />
               <input type="button" (click)="title = ''" value="Clear" />
               Preview {{ title }}
               <p>However, you can archive the same result with ngModel</p>
               <input type="text" [(ngModel)] = "title" >
               <input type="button" (click)="title = ''" value="Clear" >
               Preview {{ title }}
               
              ` ,
    providers: []
})
export class TwoWayBindingTutorialComponent{
    title = "Angular App";
}