import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PlayingAreaDirective } from '../../directives/playing-area.directive';
import { Die } from '../../die-control/die-control.model';
import { Observable } from 'rxjs/Observable';
import { PlayingAreaDimension } from '../../models/playingAreaDim.model';

@Component({
  selector: 'app-playing-area',
  templateUrl: './playing-area.component.html',
  styleUrls: ['./playing-area.component.css']
})
export class PlayingAreaComponent implements OnInit { 
 
  @Input()
  dice: Die[];

  @Input() 
  playingAreaDimension: PlayingAreaDimension;

  constructor() { }

  ngOnInit() { 
    
  }
 
}
