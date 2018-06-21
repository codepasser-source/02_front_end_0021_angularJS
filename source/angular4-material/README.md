
# 环境篇

## 安装开发环境

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

## Material整合

- Step 1: Install Angular Material and Angular CDK

> npm install --save @angular/material @angular/cdk

- Step 2: Animations

> npm install --save @angular/animations

        import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

        @NgModule({
        ...
        imports: [BrowserAnimationsModule],
        ...
        })
        export class PizzaPartyAppModule { }

- Step 3: Import the component modules

        Import the NgModule for each component you want to use:

        import {MdButtonModule, MdCheckboxModule} from '@angular/material';

        @NgModule({
          ...
          imports: [MdButtonModule, MdCheckboxModule],
          ...
        })
        export class PizzaPartyAppModule { }

        Alternatively, you can create a separate NgModule that imports all of the Angular Material components that you will use in your application. You can then include this module wherever you'd like to use the components.

        import {MdButtonModule, MdCheckboxModule} from '@angular/material';

        @NgModule({
          imports: [MdButtonModule, MdCheckboxModule],
          exports: [MdButtonModule, MdCheckboxModule],
        })
        export class MyOwnCustomMaterialModule { }

- Step 4: Include a theme

        To get started with a prebuilt theme, include one of Angular Material's prebuilt themes globally in your application. If you're using the Angular CLI, you can add this to your styles.css:

        @import "~@angular/material/prebuilt-themes/indigo-pink.css";

- Step 5: Gesture Support

> npm install --save hammerjs

        After installing, import it on your app's entry point (e.g. src/main.ts).

        import 'hammerjs';

- Step 6 (Optional): Add Material Icons

        If you want to use the md-icon component with the official Material Design Icons, load the icon font in your index.html.

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

- Appendix: Configuring SystemJS

        If your project is using SystemJS for module loading, you will need to add @angular/material and @angular/cdk to the SystemJS configuration.

        The @angular/cdk package is organized of multiple entry-points. Each of these entry-points must be registered individually with SystemJS.

        Here is a example configuration where @angular/material, @angular/cdk/platform and @angular/cdk/a11y are used:

        System.config({
          // Existing configuration options
          map: {
            // ...
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            // CDK individual packages
            '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
            '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
            // ...
          }
        });

# Angular4 - Material

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
