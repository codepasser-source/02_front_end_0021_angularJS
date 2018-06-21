import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // root
  { path: '', loadChildren: 'app/index/index.module#IndexModule' },
  // home
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  // docs
  { path: 'docs', loadChildren: 'app/docs/docs.module#DocsModule' },
  // guides
  { path: 'guides', loadChildren: 'app/guides/guides.module#GuidesModule' },
  // default
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
