import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this.renderizador2.setStyle(
    //   this.elementoreferencia.nativeElement,
    //   'background-color', 'yellow'
    // );

    this.variavelBackground='yellow'
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderizador2.setStyle(
    //   this.elementoreferencia.nativeElement,
    //   'background-color', 'green'
    // );
    
    this.variavelBackground='green';
  }

  private variavelBackground: string;
  //@HostBinding('style.backgroundColor') variavelBackground: string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.variavelBackground;
  };

   constructor(
    //private elementoreferencia: ElementRef,
    //private renderizador2: Renderer2
    ){}
  

}
