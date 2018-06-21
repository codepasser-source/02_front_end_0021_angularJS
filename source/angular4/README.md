# 环境篇

## 安装开发环境

- 安装nodejs

    https://nodejs.org/en/

> 注意：Angular CLI 需要Node 4.X 和 NPM 3.X 以上的版本支持。

- 全局安装

>
    sudo npm install -g typescript
    sudo npm install -g @angular/cli

>
    # 选择淘宝npm库: --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g typescript --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g @angular/cli --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist

- 卸载 angular cli

>
    # 目录 /usr/local/lib/node_modules
    sudo npm uninstall -g @angular/cli
    sudo npm cache clean

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

## 配置说明

- git clone

>   git clone http://172.16.75.12:3000/root/angular4.git

- npm install

>   clone到本地后,运行 npm install 安装 node_modules

- 常见问题

>   备注: 由于npm install 时node-sass问题, 需要手动导入 node-modules到项目目录下.

- 方法一: git clone http://172.16.75.12:3000/root/angular4-node-module.git

>   下载到本地, 后解压 node-modules.tar.gz后放入 angular4根目录.

- 方法二: 手动创建应用后,将node-modules文件加copy到 angular4应用下

>
    # 创建一个新的 Angular 项目
    ng new temp --style scss --routing true

>
    # 安装 ng-bootstrap & bootstrap@4.0.0-alpha.6
    npm install --save @ng-bootstrap/ng-bootstrap
    npm install --save bootstrap@4.0.0-alpha.6

- 启动

> ng serve --port 8080 --watch true --open true

# Angular4

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
