/*一个 属性型指令 ，它会设置所在元素的背景色*/
import { Directive,ElementRef,Renderer } from '@angular/core';
/*
	ElementRef:
	安全风险：允许直接访问DOM会让你的应用更容易受到XSS攻击，
	对于在你代码中的任何ElementRef都要仔细审查。
	
	Render:
	拥有一系列对于函数操作的参数

*/
@Directive({selector:'[highlight]'})

/*Highlight the attached element in gole*/
export class HighLightDirective{
	constructor(renderer:Renderer,el:ElementRef){
		renderer.setElementStyle(el.nativeElement,'backgroundColor','gold');
		console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
	}
}