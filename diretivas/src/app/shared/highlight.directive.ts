import { Directive, HostBinding,
  HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.variavelBackground = this.highlightColor; 
  }

  @HostListener('mouseleave') onMouseLeave(){
     this.variavelBackground= this.defaultColor;
  }

  @HostBinding('style.backgroundColor') variavelBackground: string;

  @Input() defaultColor: string = 'purple';
  @Input() highlightColor: string = 'blue';

  constructor(
  
  ){}

    ngOnInit(){
      this.variavelBackground = this.defaultColor;
    }

}
