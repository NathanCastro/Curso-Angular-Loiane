import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-binding';

  inicioValor = 3;

  deletarCiclo= false;

  mudarValor(){
    this.inicioValor++;
  } 

  destruirCiclo(){
    this.deletarCiclo= true
  }

}
