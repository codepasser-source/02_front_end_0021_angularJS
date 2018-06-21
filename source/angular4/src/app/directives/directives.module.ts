import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Import common directives */
import { HighLightDirective } from './high-light.directive';
import { UnlessDirective } from './unless.directive';
import { StopPropagationDirective } from './stop-propagation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HighLightDirective,
    UnlessDirective,
    StopPropagationDirective
  ],
  declarations: [
    HighLightDirective,
    UnlessDirective,
    StopPropagationDirective
  ]
})
export class DirectivesModule { }
