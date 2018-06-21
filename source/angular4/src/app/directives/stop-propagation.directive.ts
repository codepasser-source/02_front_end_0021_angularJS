import { Directive, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStopPropagation]'
})
export class StopPropagationDirective {

  @Output("appStopPropagation")
  stopPropagationEvent = new EventEmitter();

  unsubscribe: () => void;

  constructor(
    private renderer: Renderer2, // Angular 导入Renderer
    private element: ElementRef) {
  }

  ngOnInit() {
    console.log('StopPropagationDirective ngOnInit ->');
    this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', event => {
      event.stopPropagation();
      this.stopPropagationEvent.emit(event);
    });
  }

  ngOnDestroy() {
    console.log('StopPropagationDirective ngOnDestroy ->');
    this.unsubscribe();
  }

}
