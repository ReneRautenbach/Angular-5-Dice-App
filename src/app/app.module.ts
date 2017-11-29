import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { PlayingAreaComponent } from './components/playing-area/playing-area.component';
import { SideNavComponent } from './components/side-nav/side-nav.component'; 

import { DieControlModule } from './die-control/die-control.module';
import { DieControlService } from './die-control.service';
 
const appRoutes: Routes = [
  { path: 'main', component: AppComponent },  
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayingAreaComponent,
    PlayingAreaComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    DieControlModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    DieControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
