import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Import common module for base components
import { ComponentsModule } from '../components/components.module';
// Import common directives
import { DirectivesModule } from '../directives/directives.module';
// Import common PipeTransform
import { PipesModule } from '../pipes/pipes.module';
// Import router module
import { GuidesRoutingModule } from './guides-routing.module';
// import main module
import { GuidesComponent } from './guides.component';
// Import components
import { NavigatorComponent } from './navigator/navigator.component';
import { IndexComponent } from './index/index.component';
import { ReadmeComponent } from './readme/readme.component';
// Import basies
import { TscComponent } from './tsc/tsc.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { TemplateComponent } from './template/template.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { InjectionComponent } from './injection/injection.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ParentComponent } from './lifecycle/parent/parent.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { EventComponent } from './event/event.component';
import { HttpComponent } from './http/http.component';
import { FormComponent } from './form/form.component';
import { RouterComponent } from './router/router.component';
import { OtherComponent } from './other/other.component';

// Import injection service
import { LoggerService } from '../services/logger.service';
import { BaseService } from '../services/base.service';
import { AuthGuardService } from '../services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    GuidesRoutingModule
  ],
  providers: [
    LoggerService,
    BaseService,
    AuthGuardService
  ],
  declarations: [
    GuidesComponent,
    NavigatorComponent,
    IndexComponent,
    ReadmeComponent,
    TscComponent,
    ArchitectureComponent,
    TemplateComponent,
    DirectiveComponent,
    PipeComponent,
    DecoratorComponent,
    InjectionComponent,
    LifecycleComponent,
    ParentComponent,
    ChildComponent,
    EventComponent,
    HttpComponent,
    FormComponent,
    RouterComponent,
    OtherComponent
  ]
})
export class GuidesModule { }
