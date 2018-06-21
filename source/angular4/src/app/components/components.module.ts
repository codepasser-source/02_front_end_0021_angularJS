import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import router module
import { Routes, RouterModule } from '@angular/router';
// Import common components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigatorComponent,
    WelcomeComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigatorComponent,
    WelcomeComponent
  ]
})
export class ComponentsModule { }
