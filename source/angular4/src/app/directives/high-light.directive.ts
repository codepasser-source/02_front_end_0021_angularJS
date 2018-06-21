import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input('defaultClass')
  defaultClass: String;

  constructor(private el: ElementRef) {
    console.log('HighLightDirective constructor ->');
    // console.log(el);
    // el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.className = 'alert alert-success';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('onMouseEnter > ', this.defaultClass);
    this.toggleClass('alert alert-info');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('onMouseLeave > ', this.defaultClass);
    this.toggleClass('alert alert-success');
  }

  toggleClass(className: String) {
    console.log('toggleClass > ', className);
    this.el.nativeElement.className = className;
  }

}
