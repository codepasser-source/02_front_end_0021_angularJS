import { Component, OnInit, ViewEncapsulation, Inject, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { SkinType } from 'ngx-weui';
import { ActionSheetService, ActionSheetConfig, ActionSheetComponent } from "ngx-weui/actionsheet";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  menus: any[] = [
    { text: '菜单一', value: 'test', other: 1 },
    { text: '菜单二', value: 'test', other: 2 },
    { text: '菜单三', value: 'test' }
  ];

  config: ActionSheetConfig = <ActionSheetConfig>{
    title: '这是一段标题'
  };

  @ViewChild('ios')
  iosAS: ActionSheetComponent;
  @ViewChild('android')
  androidAS: ActionSheetComponent;
  @ViewChild('auto')
  autoAS: ActionSheetComponent;

  constructor( @Inject(ActionSheetService) private srv) { }

  ngOnInit() {
  }

  onShow(type: SkinType, backdrop: boolean = true) {
    console.log('HomeComponent -> onShow', type, backdrop);
    this.config.skin = type;
    this.config.backdrop = backdrop;
    this.config = Object.assign({}, this.config);
    setTimeout(() => {
      (<ActionSheetComponent>this[`${type}AS`]).show().subscribe((res: any) => {
        console.log('type', res);
      });
    }, 10);
  }

  onShowBySrv(type: SkinType, backdrop: boolean = true) {
    console.log('HomeComponent -> onShowBySrv', type, backdrop);
    this.config.skin = type;
    this.config.backdrop = backdrop;
    this.srv.show(this.menus, this.config).subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnDestroy() {
    console.log('HomeComponent -> ngOnDestroy');
    this.srv.destroyAll();
  }
}
