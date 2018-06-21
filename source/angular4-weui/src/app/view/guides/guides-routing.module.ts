import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidesComponent } from './guides.component';

const routes: Routes = [
  {
    path: '', component: GuidesComponent,
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
