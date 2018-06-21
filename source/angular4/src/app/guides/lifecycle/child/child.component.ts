import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guides-lifecycle-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  // 成员属性
  @Input('caption')
  caption: string;

  /*
  * 成员属性,getter setter封装
  */
  _counter: number;
  @Output()
  changeCounter: EventEmitter <number> = new EventEmitter<number>();

  @Input()
  set counter(_counter: number) {
    this._counter = _counter;
  }

  get counter(): number {
    return this._counter;
  }

  increment() {
    this._counter++;
    this.changeCounter.emit(this._counter);
  }

  decrement() {
    this._counter--;
    this.changeCounter.emit(this._counter);
  }

  constructor() {
    console.log('ChildComponent constructor ->');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildComponent ngOnChanges ->', changes);
  }

  ngOnInit() {
    console.log('ChildComponent ngOnInit ->');
  }

  ngDoCheck() {
    console.log('ChildComponent ngDoCheck ->');
  }

  ngAfterContentInit() {
    console.log('ChildComponent -> ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ChildComponent -> ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ChildComponent  -> ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ChildComponent -> ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ChildComponent ngOnDestroy ->');
  }

}
