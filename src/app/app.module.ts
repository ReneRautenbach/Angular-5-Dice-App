import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { PlayingAreaComponent } from './components/playing-area/playing-area.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PlayingAreaDirective } from './directives/playing-area.directive';

import { DieControlModule } from './die-control/die-control.module';
import { DieControlService } from './die-control.service';
 
@NgModule({
  declarations: [
    AppComponent,
    PlayingAreaComponent,
    PlayingAreaComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    DieControlModule
  ],
  providers: [
    DieControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
