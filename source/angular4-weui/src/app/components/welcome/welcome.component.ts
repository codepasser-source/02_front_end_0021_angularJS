import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title:string;

  constructor() { }

  ngOnInit() {
    this.title = 'Angular4 & WEUI';
  }

}
