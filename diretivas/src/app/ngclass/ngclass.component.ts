import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  meuFavorito: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }
}
