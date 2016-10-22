/*
	在 main.ts 文件中，我们通过引导 AppModule 来启动应用。
*/
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// The app module
import { AppModule } from './app/app.module';
/*启用 Angular 的产品模式*/
if (process.env.ENV === 'production') {
  enableProdMode();
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);