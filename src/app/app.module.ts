import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppModernComponent } from './app-modern/app-modern.component';
import { EventDrivenComponent } from './event-driven/event-driven.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './ui-components/header/header.component';
import { FooterComponent } from './ui-components/footer/footer.component';
import { SideNavbarComponent } from './app-modern/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppModernComponent,
    EventDrivenComponent,
    HeaderComponent,
    FooterComponent,
    SideNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
