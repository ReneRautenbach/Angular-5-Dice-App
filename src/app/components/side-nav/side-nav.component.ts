import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor() { }

  @Input()
  total: number =0;

  @Input()
  sidebarHeight: number;

  @Input()
  sidebarWidth: number;

  @Output()
  addDie:EventEmitter<any> = new EventEmitter<any>();
  
  @Output()
  reRollDie:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  resetPlayingArea:EventEmitter<any> = new EventEmitter<any>();
 
  add() { 
    this.addDie.emit();
  }

  reroll() { 
    this.reRollDie.emit();
  }

  reset() { 
    this.resetPlayingArea.emit();
  }
}
