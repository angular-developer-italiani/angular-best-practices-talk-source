import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggableComponent } from './components/toggable.component';

@NgModule({
  declarations: [
    ToggableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggableComponent
  ]
})
export class UIKitModule {}
