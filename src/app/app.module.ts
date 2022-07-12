import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppModernComponent } from './app-modern/app-modern.component';
import { EventDrivenComponent } from './event-driven/event-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppModernComponent,
    EventDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
