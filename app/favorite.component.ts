// core fo angular2 . always need it
import {Component} from '@angular/core';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'favorite', 
    template: `
    <h3>Favorite Star</h3>
    <ul>
        <li> 
            <span class="glyphicon glyphicon-star"> No Event Handler</span>
        </li>
        <li> 
            <span class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick($event)" > With Event Handler</span>
        </li>
    </ul>
    `,
    // including 
   directives:[ ]
})

export class FavoriteComponent {
  
  isFavorite: boolean = false;   
  
  onClick($event){
      this.isFavorite = !this.isFavorite;
  }
  
}