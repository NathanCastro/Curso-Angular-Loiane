import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  url= "https://www.google.com";
  url_img="http://lorempixel.com/output/people-q-c-549-480-6.jpg"
  url_img2="http://lorempixel.com/output/sports-q-g-549-480-3.jpg"
  url_img3="http://lorempixel.com/output/city-q-g-549-480-2.jpg"

  valorAtual: string=""
  valorSalvo: string = ""
  
  isMouseOver: boolean = false;

  nomeCurso: string = 'Angular';

  valorInicial= 10
  
  getValor(){
    return 2
  }

  cursoAngular: boolean=true;

  getCurtirCurso(){
    return true;
  }

  onKeyUp($event){
   this.valorAtual = (<HTMLInputElement>$event.target).value;
  }//$event serve para aparecer as informações daquele evento, no caso de cima está pegando o valor digitado.

  salvarValor(valor){
    this.valorSalvo = valor;

  }
  
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver)
  }


  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado(){
    alert("oi safadinha")
  }

  onMudouValor($event){
    console.log($event.novoValor)
  }
}
