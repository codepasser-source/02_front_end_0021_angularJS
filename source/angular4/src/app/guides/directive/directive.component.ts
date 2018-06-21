import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  condition: boolean;

  skills: Array<string>;

  defaultClass: string;

  constructor() {
    this.condition = true;
    this.skills = new Array();
    this.skills.push('a');
    this.skills.push('b');
    this.skills.push('c');
    this.defaultClass = 'alert alert-success';
  }

  ngOnInit() {
  }

}
