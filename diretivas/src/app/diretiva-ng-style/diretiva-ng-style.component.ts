import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent implements OnInit {

ativo: boolean= false;

tamanhoFonte: number= 10;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }
}
