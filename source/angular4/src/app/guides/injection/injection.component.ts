import { Component, OnInit, Inject } from '@angular/core';

import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss']
})
export class InjectionComponent implements OnInit {

  constructor( @Inject(LoggerService) private logger) {
    //constructor(private logger: LoggerService) {
    console.log('InjectionComponent constructor ->');
    console.log(logger);
    logger.info('LoggerService -> info');
  }

  ngOnInit() {
  }

}
