import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // root
  { path: '', loadChildren: 'app/view/index/index.module#IndexModule' },
  // guides
  { path: 'guides', loadChildren: 'app/view/guides/guides.module#GuidesModule' },
  // components
  { path: 'components', loadChildren: 'app/view/components/components.module#ComponentsModule' },
  // default
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
