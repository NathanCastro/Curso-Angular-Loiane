import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient    
    ) { }

  ngOnInit() {

    //as duas formas estão certas 
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email:[null, [ Validators.required,  Validators.email]],
      
      endereco: this.formBuilder.group({
        cep:[null, Validators.required],
        numero:[null, Validators.required],
        complemento:[null],
        rua:[null, Validators.required],
        bairro:[null, Validators.required],
        cidade:[null, Validators.required],
        estado:[null, Validators.required],
      })
    });
    
  }

  onSubmit(){
    console.log('Aqui é o formulário =>', this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map( res => res))
      .subscribe(dados => {console.log('Aqui aparece os dados=>', dados)
      this.resetar()
      },
      (error:any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset()
  }

  validaTouchedValid(campo: string){
    return !this.formulario.get(campo)?.valid && !!this.formulario.get(campo)?.touched;
    
  }

  verificarEmailInvalido(){
    let campoEmail = this.formulario.get('email')
    
    if(campoEmail.errors){
      return campoEmail.errors.required && campoEmail.touched;
    }
  }
  
  aplicaCssErro(campo: string){
    return {
      'was-validated' : this.validaTouchedValid(campo),
      'has-feedback' : this.validaTouchedValid(campo)
    }
  }

  consultaCEP(){
    let cep = this.formulario.get('endereco.cep').value;
    
    cep.replace(/\D/g, '');

    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
    
      
      if(validacep.test(cep)) {   
        this.resetaDadosForm();

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .pipe(map(dados =>  dados))
          .subscribe(dados => this.populaDadosForm(dados));
      } 
    }
  }

  populaDadosForm(dados){

    this.formulario.patchValue({
      endereco: {
        //cep:dados.cep ,
        complemento:dados.complemento,
        rua:dados.logradouro,
        bairro:dados.bairro ,
        cidade:dados.localidade,
        estado:dados.uf 
      }
    });

    this.formulario.get('nome').setValue('Pirocudo')
  }
  resetaDadosForm(){
    this.formulario.patchValue({
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