import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import material of module */
import { MaterialModule } from '../../material/material.module';
/* Import commons components of module */
import { ComponentsModule as ComponentsModulex } from '../../components/components.module';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModulex,
    ComponentsRoutingModule
  ],
  declarations: [ComponentsComponent]
})
export class ComponentsModule { }
