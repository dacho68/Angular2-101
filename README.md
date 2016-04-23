# Angular2-101

This is the staring point for the CSharp developers who want to throw into Angular2.  Most of the samples are from the course Angular 2 with TypeScript by Mosh Hamedi.
I develop  the Angular 2 samples along way I'm learning Angular 2.

## Setup the environment on Windows
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

See https://github.com/dacho68/Angular2-101/blob/master/app/propertyBindingTutorial.component.ts
``` html5
    One way binding from the Component to DOM. There are 3 ways to bind a property, see the img binding below.</p>
  
    Syntax 1 : DOM property in the square braket [attribute]="property"</p>
    Syntax 2 : Prefix with the "bind&-" </p>
    Syntax 3 : Interpolation {{ property }} 

    <h5>{{ tilte }}</h5>
    <img src="{{imageUrl}}" />
    <img [src]="imageUrl" />
    <img bind-src="imageUrl" />
```