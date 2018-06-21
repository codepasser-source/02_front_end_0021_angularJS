import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import common module for base components
import { ComponentsModule } from '../../components/components.module';
// Import router module
import { IndexRoutingModule } from './index-routing.module';
// import main module
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
