import { Component, OnInit } from '@angular/core';

// abstract class Person {
//   _name: string;
// }
class User {
  private _fullName: string;
  private _age: number;

  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    this._fullName = newName;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  name = 'Angular';

  employee: User;

  address = {
    province: '辽宁',
    city: '大连'
  };

  constructor() {
    this.employee = new User();
    this.employee.fullName = 'Angular';
    this.employee.age = 20;
  }

  ngOnInit() {
  }
}
