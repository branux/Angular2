import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        NavbarComponent,
        JumbotronComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }