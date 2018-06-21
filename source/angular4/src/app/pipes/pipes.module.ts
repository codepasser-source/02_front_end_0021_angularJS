import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EllipsisPipe],
  declarations: [EllipsisPipe]
})
export class PipesModule { }
