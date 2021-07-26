import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any= {
    titulo: 'Scrum a arte da guerra do comando vermelho',
    rating: 4.121,
    numeroPaginas: 241,
    preco: 32.44,
    dataLancamento: new Date(2019, 3, 4),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['angular', 'java']
  
  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros)
  }

  obtercursos(){

    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() ===''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v => v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >=0){
      return true;
      }
      return false
    });  
  }
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));
  
  constructor() { }

  ngOnInit(): void {
  }

}
