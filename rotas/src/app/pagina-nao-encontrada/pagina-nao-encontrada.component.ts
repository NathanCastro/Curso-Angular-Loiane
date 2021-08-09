import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrls: ['./pagina-nao-encontrada.component.scss']
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagem_URL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fblogmarketingonline.com.br%2Ferro-404-pagina-nao-pode-ser-encontrada-aprenda-como-corrigir%2F&psig=AOvVaw2ANC6dSHG5wiOkyB6iUifc&ust=1628595665229000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDclePto_ICFQAAAAAdAAAAABAJ";
}
