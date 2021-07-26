import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule { }
