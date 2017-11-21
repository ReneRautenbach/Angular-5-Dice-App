import { Directive, ElementRef, Renderer2, OnDestroy, OnInit, AfterViewInit, Input } from '@angular/core';
 
// host: create the event trigger and handler on the host element
@Directive({
  selector: '[draggable]',
  host: {
    '(dragstart)': 'onDragStart($event)',
    '(dragend)': 'onDragEnd($event)',
    '(drag)': 'onDrag($event)'
  }
})
export class DraggableDirective implements OnDestroy, OnInit, AfterViewInit {
  // movement X axis
  private cX: number = 0;
  // movement Y axis
  private cY: number = 0;
  
  private canDrag:boolean = true;
  
  @Input() containerLeft: number;
  @Input() containerRight: number;
  @Input() containerTop: number;
  @Input() containerBottom: number;

  // only allowed element positions
  private allowedCSSPosition: Array<string> = ['absolute', 'fixed', 'relative'];
  
  // setter for draggable
  @Input('draggable')
  set draggable(value:any){
    if(value === undefined || value === null || value === '' ) return;
    this.canDrag = Boolean(value);
  }

  
  // 
  constructor( private el: ElementRef, private renderer: Renderer2 ) {
    
  }
  
  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
  }

  ngAfterViewInit(){
    try {
      let pos = window.getComputedStyle(this.el.nativeElement).position;
      if (this.allowedCSSPosition.indexOf(pos) === -1) {
        console.warn( this.el.nativeElement, 'Invalid Position ' + this.allowedCSSPosition.join('|'));
      }
    } catch (ex) {
      console.error(ex);
    }
  }

  ngOnDestroy(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'false');
  }
  
  onDragStart(ev: MouseEvent) {
    // take the position of the mouse and subtract the element position left and top
    // this takes into account that the mouse pointer on the image is not at the same as the image position
    this.cX = ev.x - this.el.nativeElement.offsetLeft;
    this.cY = ev.y - this.el.nativeElement.offsetTop; 
  }

  onDrag(event: MouseEvent) {
    // the actual mouse position
    this.move(event.x, event.y);
  }

  onDragEnd(event: MouseEvent) {
    // reset the mouse pointer offset
    this.cX = 0;
    this.cY = 0;
  }

  move(x: number, y: number) {
    if (!x || !y) return;
    //change the style to the element to reflect the movement of the mouse.
    let newY = y - this.cY;
    let newX = x - this.cX;  
    
    if(newX > this.containerRight  || newX < this.containerLeft)  return false;
    if(newY > this.containerBottom  || newY < this.containerTop)  return false;
    
    this.renderer.setStyle(this.el.nativeElement, 'top', newY + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'left', newX + 'px');
  }
 

  

}