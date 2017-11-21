import { Component, Directive, HostListener, EventEmitter, ElementRef, OnInit, Input, Output } from '@angular/core';
import { Die } from '../die-control.model';
import { DieControlService } from '../../die-control.service';

@Component({
  selector: 'app-die-control',
  templateUrl: './die-control.component.html',
  styleUrls: ['./die-control.component.css']
})
export class DieComponent implements OnInit  {

  @Input() value: number;
  
  @Input() imageUrl: string;

  @Input() index: string; 
   
  // top of playing area
  @Input() top: number;
  
  // left of playing area
  @Input() left: number;

  // bottom of playing area
  @Input() bottom: number;

  // right of playing area
  @Input() right: number;

  @Output()
  dieClicked:EventEmitter<any> = new EventEmitter<any>();

  private dieWidth: number = 40;
  private dieHeight: number = 40; 
  
  private spacerWidth : number = 40; 
  private spacerHeight : number = 40;

  private xpos: number = 200;  
  private ypos: number = 200;   

  private minX: number;
  private maxX: number;
  private minY: number;
  private maxY: number;


  constructor(private dieControlService: DieControlService){ 
  }

  ngOnInit() { 

    this.minX = this.left+10;
    this.maxX = this.right-this.spacerWidth;
    this.minY = this.top+10;
    this.maxY = this.bottom-this.spacerHeight;

    this.setPosition(); 
  }

  @HostListener('click', ['$event'])
  onMouseclick(event) {  
    this.dieControlService.reroll(this.index);
  }
 
  setPosition() {

    this.xpos = Math.floor(Math.random() * (this.maxX - this.minX + 1)) + this.minX;
    this.ypos = Math.floor(Math.random() * (this.maxY - this.minY  + 1)) + this.minY; 
  }

}
