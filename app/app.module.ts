import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [CommonModule,BrowserModule, FormsModule],
    declarations: [AppComponent],
    exports: [],
    providers: [],    
    bootstrap:    [AppComponent]

})

export class AppModule  { }
