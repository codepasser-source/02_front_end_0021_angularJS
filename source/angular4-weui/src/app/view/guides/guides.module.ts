import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import common module for base components
import { ComponentsModule } from '../../components/components.module';
// Import router module
import { GuidesRoutingModule } from './guides-routing.module';
// import main module
import { GuidesComponent } from './guides.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    GuidesRoutingModule
  ],
  declarations: [GuidesComponent]
})
export class GuidesModule { }
