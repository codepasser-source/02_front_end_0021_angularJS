import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import material of module */
import { MaterialModule } from '../../material/material.module';
/* Import commons components of module */
import { ComponentsModule } from '../../components/components.module';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
