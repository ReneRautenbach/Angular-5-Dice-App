import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DieComponent } from './component/die-control.component';
import { DraggableDirective } from './draggable.directive';

@NgModule({
  declarations: [
    DieComponent,
    DraggableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DieComponent
  ]
})
export class DieControlModule { }
