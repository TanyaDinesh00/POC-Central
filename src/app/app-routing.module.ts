import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModernComponent } from './app-modern/app-modern.component';
import { EventDrivenComponent } from './event-driven/event-driven.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'modernization',
    component:AppModernComponent
  },
  {
    path: 'event-driven',
    component:EventDrivenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
