import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { ProfileComponent }   from './profile/profile.component';
import { NavbarComponent }   from './navbar/navbar.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, ProfileComponent, NavbarComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }