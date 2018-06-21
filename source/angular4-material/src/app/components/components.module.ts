import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import RouterModule */
import { RouterModule } from '@angular/router';

/* Import material of module */
import { MaterialModule } from '../material/material.module';

/* Import componets for commons */
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    WelcomeComponent,
    HeaderComponent
  ],
  exports: [
    WelcomeComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
