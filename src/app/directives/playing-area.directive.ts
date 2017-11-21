import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[playing-area]',
})
export class PlayingAreaDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}