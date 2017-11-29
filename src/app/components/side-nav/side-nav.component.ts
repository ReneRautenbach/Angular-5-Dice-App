import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  @Input()
  total: number;

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
 
  ngOnInit(){
    this.total = 0;
  }

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
