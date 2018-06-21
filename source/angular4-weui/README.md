# 环境篇

# 安装开发环境

- 安装nodejs

    https://nodejs.org/en/

> 注意：Angular CLI 需要Node 4.X 和 NPM 3.X 以上的版本支持。

- 卸载 angular cli

>
    # 目录 /usr/local/lib/node_modules
    sudo npm uninstall -g @angular/cli
    sudo npm cache clean

- 全局安装

>
    sudo npm install -g typescript
    sudo npm install -g @angular/cli

>
    # 选择淘宝npm库: --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g typescript --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g @angular/cli --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist

>
    # 注意: 重新安装时 npm ERR! Refusing to delete /usr/local/bin/ng: ../lib/node_modules/angular-cli/bin/ng # symlink target is not controlled by npm /usr/
    local
    # 需要手动删除 ln

>
    # 检查安装成功
    ng -v

## 应用安装

- 安装node_modules
> npm install

- 启动应用
> sh app-run.sh

## 安装ngx-weui

>   官方文档

    https://cipchk.github.io/ngx-weui/#/docs/start

>   Install ngx-weui from npm

    npm install --save ngx-weui
    You will need weui styles

>   Download style css file, and put in local folder : /app/assets/library/weui/1.1.2/

    http://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css
    http://res.wx.qq.com/open/libs/weui/1.1.2/weui.css

>   import by styles.scss

    // 生产环境
    @import "./assets/library/weui/1.1.2/weui.min.css";
    // 开发环境
    @import "./assets/library/weui/1.1.2/weui.css";

>   Import BrowserAnimationsModule & ngx-weui in to your root AppModule.

    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { WeUiModule } from 'ngx-weui';

    @NgModule({
        imports: [
          BrowserAnimationsModule,
          ...
          WeUiModule.forRoot()
        ]
    })
    export class AppModule { }

# Angular4 - ngx-weui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
