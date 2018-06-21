import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import material module */
/* Navigator */
import { MdToolbarModule } from '@angular/material';

/* Bottons & Indicators */
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
