import { Component, OnInit, Inject } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {

  id: number;
  name: string;

  constructor( @Inject(ActivatedRoute) private route, @Inject(Router) private router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = params.id
        this.name = params.name
        console.log(params);
      });

    this.route.queryParams.subscribe(
      (queryParams) => {
        console.log(queryParams);
      });
  }

  routerNavigator() {
    this.router.navigate(
      ['/guides/gs/router', 2, 'angular4'],
      {
        queryParams:{debug:false},
        // url不变化
        skipLocationChange: false
      }
    );
  }

}
