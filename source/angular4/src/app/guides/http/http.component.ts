import { Component, OnInit, Inject } from '@angular/core';

import { BaseService } from '../../services/base.service';

import { UserVo } from '../../vo/user-vo';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor( @Inject(BaseService) private baseService) {
    console.log(new UserVo());
  }

  ngOnInit() {
  }

  fnGet() {
    console.log('HttpComponent fnGet ->');
    let page = 1;
    let per_page = 5;
    this.baseService.httpGet(
      `https://api.github.com/orgs/angular/members?page=${page}&per_page=${per_page}`,
      (response) => {
        console.log('HttpComponent fnGet -> success');
        console.log(response);
        let result = response.json();
        console.log(result);
        console.log(result[0].avatar_url, result[0].id);
      },
      (error) => {
        console.log('HttpComponent fnGet -> error');
        console.log(error);
      });
  }

  fnPost() {
    console.log('HttpComponent fnPost ->');
    let page = 1;
    let per_page = 5;
    this.baseService.httpPost(
      `https://api.github.com/orgs/angular/members?page=${page}&per_page=${per_page}`,
      { id: 1 },
      (response) => {
        console.log('HttpComponent fnPost -> success');
        console.log(response);
        let result = response.json();
        console.log(result);
        console.log(result[0].avatar_url, result[0].id);
      },
      (error) => {
        console.log('HttpComponent fnPost -> error');
        console.log(error);
      });
  }

  fnPut() {
    console.log('HttpComponent fnPost ->');
    let page = 1;
    let per_page = 5;
    this.baseService.httpPut(
      `https://api.github.com/orgs/angular/members?page=${page}&per_page=${per_page}`,
      { id: 1 },
      (response) => {
        console.log('HttpComponent fnPut -> success');
        console.log(response);
        let result = response.json();
        console.log(result);
        console.log(result[0].avatar_url, result[0].id);
      },
      (error) => {
        console.log('HttpComponent fnPut -> error');
        console.log(error);
      });
  }

  fnDelete() {
    console.log('HttpComponent fnDelete ->');
    let page = 1;
    let per_page = 5;
    this.baseService.httpDelete(
      `https://api.github.com/orgs/angular/members?page=${page}&per_page=${per_page}`,
      (response) => {
        console.log('HttpComponent fnDelete -> success');
        console.log(response);
        let result = response.json();
        console.log(result);
        console.log(result[0].avatar_url, result[0].id);
      },
      (error) => {
        console.log('HttpComponent fnDelete -> error');
        console.log(error);
      });
  }

}
