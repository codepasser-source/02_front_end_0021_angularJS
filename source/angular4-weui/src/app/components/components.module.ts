import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import router module
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeComponent,
    FooterComponent
  ],
  declarations: [
    WelcomeComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
