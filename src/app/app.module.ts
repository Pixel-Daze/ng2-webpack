import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

/*BrowserModule 
	导入BrowserModule是因为它提供了启动和运行浏览器应用的那些基本的服务提供商*/

/*	 Angular模块是带有@NgModule的装饰器函数的类。它标记出该模块拥有的组件，管道和指令
	 - declarations （声明） - 本模块中拥有的视图类。 Angular 有三种视图类： 
	 组件、指令和管道 。

	 - imports - 本模块组件模板中需要由其它模块导出的类。

	 - providers - 服务 的创建者。本模块把它们加入全局的服务表中，
	让它们在应用中的任何部分都可被访问到。

	 - bootstrap - 标识出应用的主视图（被称为 根组件 ），它是所有其它视图的宿主。
	只有 根模块 才能设置 bootstrap 属性。
*/
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }