import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

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

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
  }

  onSubmit(formulario){
    console.log(formulario)

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
    .pipe(map( res => res))
      .subscribe(dados => {
        console.log(dados)
        formulario.form.reset();
      });
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

  consultaCEP(cep, form){
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
    
      this.resetaDadosForm(form);
      
      if(validacep.test(cep)) {         
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .pipe(map(dados =>  dados))
          .subscribe(dados => this.populaDadosForm(dados, form));
      } 
    }
  }

  populaDadosForm(dados, form){
    // form.setValue({
    //   nome: form.value.nome,
    //   email:form.value.email,
    //   endereco: {
    //     cep: dados.cep ,
    //     numero: "" ,
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro ,
    //     cidade: dados.localidade,
    //     estado: dados.uf 
    //   }
    // });

    form.form.patchValue({
      endereco: {
        cep: dados.cep ,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf 
      }
    });

    //console.log(form);
  }

  resetaDadosForm(form){
    form.form.patchValue({
      endereco: {
        complemento:null,
        rua: null,
        bairro: null,
        cidade: null,
        estado:null 
      }
    });
  }
}

