import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import common module for base components
import { ComponentsModule } from '../components/components.module';
// Import router module
import { DocsRoutingModule } from './docs-routing.module';
// import main module
import { DocsComponent } from './docs.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DocsRoutingModule
  ],
  declarations: [DocsComponent]
})
export class DocsModule { }
