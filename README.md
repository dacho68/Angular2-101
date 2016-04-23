# Angular2-101

This is the staring point for the CSharp developers who want to throw into Angular2.  Most of the samples are from the course Angular 2 with TypeScript by Mosh Hamedi.
I develop  the Angular 2 samples along way I'm learning Angular 2.

## Setup the environment on Windows for running the samples
- First install the Node at nodejs.org
- Install typescript 

```
npm install -g typescript
npm install -g typings
```

We are going VSCode as our IDE, and you can download it from  code.visualstudio.com. 
after you checkout this repository. Run the command below for install the dependencies

```
npm install
npm start
```

## Property Binding

   One way binding from the Component to DOM. There are 3 ways to bind a property, see the img binding below.  
   
   **Syntax :**
        1.  DOM attribute in the square bracket      -> [attribute]="component property"
        2.  Prefix with the DOM attribute with bind- -> bind-attribue = "component property"
        3.  Interpolation                            -> {{ component property }} 
 
See: [Property Binding Example](https://github.com/dacho68/Angular2-101/blob/master/app/propertyBindingTutorial.component.ts)  
``` html5
    <h5>{{ title }}</h5>
    <img src="{{imageUrl}}" />
    <img [src]="imageUrl" />
    <img bind-src="imageUrl" />
```

## Class and Style Binding
  **Syntax :** 
   
        [class.class-name] = "component property"
        [style.style-property] = "component property"    
    
See: [Class and Style Binding Example](https://github.com/dacho68/Angular2-101/blob/master/app/classBindingTutorial.component.ts)     

``` html5
    <button class="btn btn-primary" [class.active]="isActive">active</button>
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray'">active</button>
```

## Event Binding

   There are 2 ways to do the event binding as shown below. We can pass the DOM event to the handler method in the component by using the $event.
   If the parent container has also the interest in the event, then event will bubble up to their parent. However, you can stop the 
   bubbling by calling  $event.stopPropagation().
    
   **Syntax :** 
  
        1. (event)="event handler in the component"
        2. on-event="event handler in the component"
    

See: [Event Binding Example](https://github.com/dacho68/Angular2-101/blob/master/app/eventBindingTutorial.component.ts)

``` html5
    <button (click)="onClick($event)">Click syntax 1</button> 
    <button on-click="onClick($event)">Click syntax 2</button>          
    <br>
    <h4>The event also bubles up their parent. if they are also interested in the event </h4>  
    <br>         
    <div (click) = "onDivClick()" >
      <button on-click = "onClick($event)">Buble up</button>
    </div>
    <br>

```

## Two way Data Binding

   When developing data entry forms, we often want to both display a data property and update that property when the user makes changes.
   
   **Syntax :**
   
        <input [(ngModel)]="event handler in the component">
   
See: [Two way Binding Example](https://github.com/dacho68/Angular2-101/blob/master/app/twoWayBindingTutorial.component.ts)
   
``` html5   
    <input type="text" [(ngModel)]= "title" />
    <input type="button" (click)="title = ''" value="Clear" />
    Preview {{ title }}
```   


    