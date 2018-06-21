import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // root
  { path: '', loadChildren: 'app/view/index/index.module#IndexModule' },
  // home
  { path: 'home', loadChildren: 'app/view/home/home.module#HomeModule' },
  // guides
  { path: 'guides', loadChildren: 'app/view/guides/guides.module#GuidesModule' },
  // default
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
