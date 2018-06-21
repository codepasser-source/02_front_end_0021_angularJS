import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import material of module */
import { MaterialModule } from '../../material/material.module';
/* Import commons components of module */
import { ComponentsModule } from '../../components/components.module';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesComponent } from './guides.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    GuidesRoutingModule
  ],
  declarations: [GuidesComponent]
})
export class GuidesModule { }
