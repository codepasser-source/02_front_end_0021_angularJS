import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { IndexComponent } from './index/index.component';
import { GuidesComponent } from './guides.component';

// Import basies
import { TscComponent } from './tsc/tsc.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { TemplateComponent } from './template/template.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { InjectionComponent } from './injection/injection.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EventComponent } from './event/event.component';
import { HttpComponent } from './http/http.component';
import { FormComponent } from './form/form.component';
import { RouterComponent } from './router/router.component';
import { OtherComponent } from './other/other.component';

// Import injection service
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  // Guides index
  {
    path: '', component: IndexComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService],
  },
  // Guides
  {
    path: 'gs',
    component: GuidesComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: 'tsc', component: TscComponent },
      { path: 'architecture', component: ArchitectureComponent },
      { path: 'template', component: TemplateComponent },
      { path: 'directive', component: DirectiveComponent },
      { path: 'pipe', component: PipeComponent },
      { path: 'decorator', component: DecoratorComponent },
      { path: 'injection', component: InjectionComponent },
      { path: 'lifecycle', component: LifecycleComponent },
      { path: 'event', component: EventComponent },
      { path: 'http', component: HttpComponent },
      { path: 'form', component: FormComponent },
      { path: 'router/:id/:name', component: RouterComponent },
      { path: 'other', component: OtherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
