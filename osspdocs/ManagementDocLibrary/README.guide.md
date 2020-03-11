## 环境篇 ##

### 安装开发环境

- 安装nodejs

    https://nodejs.org/en/

> 注意：Angular CLI 需要Node 4.X 和 NPM 3.X 以上的版本支持。

- 卸载 angular cli
    # 目录 /usr/local/lib/node_modules
    sudo npm uninstall -g @angular/cli
    sudo npm cache clean

- 全局安装

    sudo npm install -g typescript
    sudo npm install -g @angular/cli

    # 选择淘宝npm库: --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g typescript --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g @angular/cli --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist


    # 注意: 重新安装时 npm ERR! Refusing to delete /usr/local/bin/ng: ../lib/node_modules/angular-cli/bin/ng # symlink target is not controlled by npm /usr/
    local
    # 需要手动删除 ln

    # 检查安装成功
    ng -v

- 在浏览器中打开Angular文档并搜索当前关键字

    ng doc

# ***************************** #

## 基础篇 ##

### 创建项目

- 创建一个新的 Angular 项目

    ng help
    ng new[options] <name>

    .eg : # 创建项目  样式文件使用scss ,引入routing组件
    ng new angular4 --style scss --routing true

- 运行应用

    # 启动服务 默认端口 4200, 默认监听文件更新, 启动后打开浏览器
    ng serve --port 8080 --watch true --open true

- 在项目中构建新代码

    ng g[options]

- 将自动完成功能添加到ng命令的shell中

    ng completion

- 使用protractor在当前应用中运行e2e测试

    ng e2e

- 使用clang-format格式化当前项目代码

    ng format

- 在Angular CLI配置中设置值

    ng get[options]

### 开发构建

    ng build --target=development --environment=dev
    ng build --dev --e=dev
    ng build --dev
    ng build

- 构建生产应用程序，设置GitHub存储库，然后发布应用程序

    ng github-pages:deploy [options]

- 在项目上运行codelyzer linter

    ng lint

- 使用 karma 运行单元测试

    ng test [options]

- 输出cli版本, node 版本和操作系统信息

    ng version

### 生产构建

    ng build --target=production --environment=prod
    ng build --prod --env=prod
    ng build --prod

--------------------------

## 配置篇 ##

### Routing

- 引入routing的方式

    # 创建应用时 指定引入routing组件
    ng new angular4 --style scss --routing true

- 手动创建Routing步骤
    
    # 0 在index.html head中添加 base节点

            <base href="/">

    # 1 创建 app/app.routing.module.ts

        import { NgModule } from '@angular/core';
        import { Routes, RouterModule } from '@angular/router'; // 依赖

        const routes: Routes = [
          {
            path: '',
            children: []
          }
        ];

        @NgModule({
          imports: [RouterModule.forRoot(routes)], // 根模块中使用 forRoot()，子模块中使用 forChild()
          exports: [RouterModule]
        })
        export class AppRoutingModule { }

    # 2 app/app.module.ts文件中引入 routing组件
        ...
        import { AppRoutingModule } from './app.routing.module'; //引入
        @NgModule({
          declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule,
            AppRoutingModule // 引入
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule { }

    # 3 配置路由 app-routing.module.ts

        import { HomeComponent } from './home/home.component';
        import { BashboardComponent } from './bashboard/bashboard.component';
        const routes: Routes = [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'bashboard',
            component: BashboardComponent
          },
          { path: '**', pathMatch: 'full', redirectTo: '' }
        ];

    # pathMatch?: string; 默认为前缀匹配 "prefix"; "full" 为完全匹配
    # outlet?: string; 路由目标
    # children?: Routes; 子路由的规则

### 引入 Bootstrap

- 文档

    https://ng-bootstrap.github.io/#/getting-started
    https://v4-alpha.getbootstrap.com/

- 安装 ng-bootstrap & bootstrap@4.0.0-alpha.6

    npm install --save @ng-bootstrap/ng-bootstrap
    npm install --save bootstrap@4.0.0-alpha.6
    # 安装后会在 package.json中声明依赖

-  app.module.ts中添加bootstrap依赖

    # 引入
    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

    @NgModule({
      declarations: [
        AppComponent,
        HomeComponent,
        BashboardComponent
      ],
      imports: [
        # 引入
        NgbModule.forRoot(),
        ...
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

- 添加 scss依赖 : style.scss

    /** bootstrap **/
    @import "./assets/scss/base/bootstrap-variables.scss"; // 变量文件
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
    @import '../node_modules/bootstrap/scss/bootstrap-reboot.scss'; 


### 新建模块(添加子路由 - 懒加载)

- 命令

    ng g m home --routing true
        > installing module
          create src/app/home/home-routing.module.ts
          create src/app/home/home.module.ts
          WARNING Module is generated but not provided, it must be provided to be used
    ng g c home
        > installing component
          create src/app/home/home.component.scss
          create src/app/home/home.component.html
          create src/app/home/home.component.spec.ts
          create src/app/home/home.component.ts
          update src/app/home/home.module.ts

- app-routing 中配置 Routes, 引入 loadChildren Module
    
    // home
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    // default
    { path: '**', redirectTo: '', pathMatch: 'full' }

- home-routing 中配置 Routes, 引入 HomeComponents

    import { HomeComponent } from './home.component';
    ...
    {
        path: '', component: HomeComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent }
        ]
    }

- app.component.html 中显示router link连接

    <a routerLink="/home" routerLinkActive="active">home</a>





