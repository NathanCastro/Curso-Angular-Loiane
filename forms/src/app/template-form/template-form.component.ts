import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  
  usuario: any = {
    nome: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form)

  }
  validaTouchedValid(campo){
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo){
    return {
      'was-validated' : this.validaTouchedValid(campo),
      'has-feedback' : this.validaTouchedValid(campo)
    }
  }
}
