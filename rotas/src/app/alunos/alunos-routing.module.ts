import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guards';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

// import { AlunosGuard } from '../guards/alunos.guard';
const routes: Routes = [
  { path: '', component: AlunosComponent,
  //  canActivateChild:[AlunosGuard],
  children: [
    { path: 'novo', component: AlunoFormComponent},
    { path: ':id', component: AlunoDetalheComponent,
      resolve: { aluno: AlunoDetalheResolver }
    },
    { path: ':id/editar', component: AlunoFormComponent,
      canDeactivate: [AlunosDeactivateGuard]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
