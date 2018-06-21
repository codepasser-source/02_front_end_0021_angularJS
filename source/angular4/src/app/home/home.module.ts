import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import ng-bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Import common module for base components
import { ComponentsModule } from '../components/components.module';
// Import router module
import { HomeRoutingModule } from './home-routing.module';
// import main module
import { HomeComponent } from './home.component';
// Import components
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HomeRoutingModule,
    ComponentsModule
  ],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule { }
