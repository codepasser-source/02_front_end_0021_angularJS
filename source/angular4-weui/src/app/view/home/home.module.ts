import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import weui module
import { WeUiModule } from 'ngx-weui';
// Import common module for base components
import { ComponentsModule } from '../../components/components.module';
// Import router module
import { HomeRoutingModule } from './home-routing.module';
// import main module
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    WeUiModule.forRoot(),
    ComponentsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
