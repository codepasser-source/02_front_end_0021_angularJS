import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    console.log('UnlessDirective constructor->');
  }

  @Input()
  set appUnless(condition: boolean) {
    console.log('UnlessDirective ->', condition);
    // console.log(this.templateRef,this.viewContainer);
    if (condition) {
      // render
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!condition) {
      // clear
      this.viewContainer.clear();
    }
  }
}
