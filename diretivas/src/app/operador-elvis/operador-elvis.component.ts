import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any={
    descr: 'descriçaõ da tarefa',
    responsavel: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
