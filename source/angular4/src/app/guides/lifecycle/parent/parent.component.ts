import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides-lifecycle-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  inputs: ['title']
})
export class ParentComponent implements OnInit {

  counter: number;

  title: string;

  counterChangeHandler(event) {
    console.log('ParentComponent -> counterChangeHandler', event);
    this.counter = event;
  }

  constructor() {
    console.log('ParentComponent constructor ->');
  }

  ngOnChanges(changes) {
    console.log('ParentComponent ngOnChanges ->', changes);
  }

  ngOnInit() {
    console.log('ParentComponent ngOnInit ->');
    this.counter = 0;
  }

  ngDoCheck() {
    console.log('ParentComponent ngDoCheck ->');
  }

  ngAfterContentInit() {
    console.log('ParentComponent -> ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ParentComponent -> ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ParentComponent  -> ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ParentComponent -> ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ParentComponent ngOnDestroy ->');
  }

}
