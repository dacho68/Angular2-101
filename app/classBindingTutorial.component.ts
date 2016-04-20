import {Component} from 'angular2/core'

@Component({
    selector: 'classBindingTutorial',
    template: `<h3>Class Binding</h3>
               [class.active] = "isActive"
               <button class="btn btn-primary">normal</button> <button class="btn btn-primary" [class.active]="isActive">active</button>
               <br>
               <h3>Style Binding</h3>
               [style.backgroundColor]="isActive ? 'blue' : 'gray'
                <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray'">active</button>
              ` ,
    providers: []
})
export class ClassBindingTutorialComponent{
    isActive = true;
}