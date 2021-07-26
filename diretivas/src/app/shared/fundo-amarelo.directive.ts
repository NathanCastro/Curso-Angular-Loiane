import { Directive, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private ElementoReferencia: ElementRef, 
    private renderizador: Renderer2
    ) {

    // console.log(this.ElementoReferencia);
    //this.ElementoReferencia.nativeElement.style.backgroundColor="yellow"
   
    this.renderizador.setStyle(
      this.ElementoReferencia.nativeElement,
      'background-color', 
      'yellow'
      )
  }

}
