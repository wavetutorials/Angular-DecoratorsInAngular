import { Directive,
HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[StylingDiv]'
})
export class StylingDivDirective {

  constructor() { }

  @HostBinding('style.color') bgColor;
  @HostListener('click') ClickMethod(){
    this.bgColor = "blue";
  }

  @HostListener('mouseover') OmMouseOver(){
    this.bgColor = "red";
  }

  @HostListener('mouseout') OmMouseOut(){
    this.bgColor = "green";
  }

}
