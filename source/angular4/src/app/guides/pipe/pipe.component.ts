import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  today: Date;

  constructor() {
    this.today = new Date();
  }

  ngOnInit() {
  }

}
