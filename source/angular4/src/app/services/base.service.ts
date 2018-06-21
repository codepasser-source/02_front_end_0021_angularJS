import { Injectable, Inject } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService {

  headers: Headers;

  options: RequestOptions;

  constructor( @Inject(Http) private http) {
    this.headers = new Headers()
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json;charset=utf-8');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Pragma', 'no-cache');
    this.options = new RequestOptions({
      headers: this.headers,
      withCredentials: true
    });
  }

  // get(url: string, options?: RequestOptionsArgs): Observable<Response>
  httpGet(endpoint: string, successCallback: any, errorCallback: any) {
    console.log('BaseService httpGet ->');

    this.http.get(endpoint)
      .toPromise()
      .then((response) => {
        console.log('BaseService httpGet -> success', response);
        if (successCallback && typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch((error) => {
        console.log('BaseService httpGet -> error', error);
        if (errorCallback && typeof errorCallback === 'function') {
          errorCallback(error);
        }
        return Promise.reject(error.message || error);
      });
  }

  // post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>
  httpPost(endpoint: string, data: any, successCallback: any, errorCallback: any) {
    console.log('BaseService httpPost ->');
    this.http.post(endpoint, data)
      .toPromise()
      .then((response) => {
        console.log('BaseService httpPost -> success', response);
        if (successCallback && typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch((error) => {
        console.log('BaseService httpPost -> error', error);
        if (errorCallback && typeof errorCallback === 'function') {
          errorCallback(error);
        }
        return Promise.reject(error.message || error);
      });
  }

  // put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>
  httpPut(endpoint: string, data: any, successCallback: any, errorCallback: any) {
    console.log('BaseService httpPut ->');
    this.http.put(endpoint, data)
      .toPromise()
      .then((response) => {
        console.log('BaseService httpPut -> success', response);
        if (successCallback && typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch((error) => {
        console.log('BaseService httpPut -> error', error);
        if (errorCallback && typeof errorCallback === 'function') {
          errorCallback(error);
        }
        return Promise.reject(error.message || error);
      });
  }

  // delete(url: string, options?: RequestOptionsArgs): Observable<Response>
  httpDelete(endpoint: string, successCallback: any, errorCallback: any) {
    console.log('BaseService httpDelete ->');
    this.http.delete(endpoint)
      .toPromise()
      .then((response) => {
        console.log('BaseService httpDelete -> success', response);
        if (successCallback && typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch((error) => {
        console.log('BaseService httpDelete -> error', error);
        if (errorCallback && typeof errorCallback === 'function') {
          errorCallback(error);
        }
        return Promise.reject(error.message || error);
      });
  }

}
