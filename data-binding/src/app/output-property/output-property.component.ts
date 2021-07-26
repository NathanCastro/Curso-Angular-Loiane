import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';



@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

 @Input() valor = 0;

 @Output() mudouValor = new EventEmitter

 @ViewChild('campoInput') campoValorInput: ElementRef;


  incrementa(){
    
    this.campoValorInput.nativeElement.value++; //Utilizando pelo ID
    // this.valor++;  //Utilizando o output com evento
     this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    // this.valor--; //Utilizando o output com evento
     this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
