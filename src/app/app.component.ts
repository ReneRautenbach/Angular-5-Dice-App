import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Die } from './die-control/die-control.model';
import { PlayingAreaDimension } from './models/playingAreaDim.model';
import { DieControlService } from './die-control.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  template: `
  <div id="board"> 
    <app-side-nav 
      [sidebarHeight]= "sidebarHeight"
      [sidebarWidth]= "sidebarWidth"
      [total] = "this.total"
      (addDie) = "OnAddDieClick($event)"
      (resetPlayingArea) = "OnResetPlayingArea($event)"
      (reRollDie) = "OnAddReRollDieClick($event)">
    </app-side-nav>
    <app-playing-area
      [dice]="this.dice$ | async"
      [playingAreaDimension]= "playingAreaDimension">
    </app-playing-area>
  </div>
  `,

  styles:  [`
  :host > div{
    width:650px;
    height:500px;
    background-color: #999;
    border: 1px solid #f1f1f1;
  } 
  `]
})
export class AppComponent implements OnInit {

  private sidebarHeight: number = 500;
  private sidebarWidth: number = 150;

  private playingAreaDimension: PlayingAreaDimension;
 
  // the total sum of the dice on the playing area to be displayed on the navigation bar
  private total: number;   
  // an observable array of dice to be added to the playing area
  private dice$: Observable<Die[]>;  

  constructor(private dieControlService: DieControlService) { 
    // set the playing area size
    this.playingAreaDimension = new PlayingAreaDimension(150, 650 , 0, 500);  
  }

  ngOnInit(){ 
    this.start(); 
  }

  private start() {
    // set the observable dice array
    this.dice$ = this.dieControlService.getDice();  
    this.dieControlService.getTotal().subscribe(result => { console.log(result); this.total = result; });
  }

  // called when addDie button clicked on the side-nav
  // creates a die and add it to the dice array
  private OnAddDieClick($event: any) { 
    this.dieControlService.addDie(); 
  }

  // called when reRollDie button clicked on the side-nav
  // assign a new value to each die and update the total sum
  private OnAddReRollDieClick($event: any) { 
    this.dieControlService.reRollAll();
  }

  // called when reRollDie button clicked on the side-nav
  // reset the playing area by setting the dice = [] and sum to 0
  private OnResetPlayingArea($event: any) {  
    this.dieControlService.reset();
    this.start();
  }
  
}
