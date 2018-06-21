import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  info(msg:String){
    console.info(msg);
  }

}
