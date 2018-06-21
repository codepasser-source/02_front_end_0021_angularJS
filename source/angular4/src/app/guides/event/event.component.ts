import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  currentHero: any;

  @Output()
  click = new EventEmitter();

  constructor() {
    this.currentHero = {
      name: 'tom',
      age: 19
    }
  }

  ngOnInit() {
  }

  onBtnClickHandler() {
    console.log('EventComponent onBtnClickHandler ->');
  }

  onTargetHandler(event: Event, target: string) {
    console.log('EventComponent onDeletelHandler ->', event, target);
    event.stopPropagation();
    // this.click.next(target);
  }

  onParentClickHandler() {
    console.log('EventComponent onParentClickHandler ->');
  }

  onChildClickHandler() {
    console.log('EventComponent onChildClickHandler ->');
  }

}
