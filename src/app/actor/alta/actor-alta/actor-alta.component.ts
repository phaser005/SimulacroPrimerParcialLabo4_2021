import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public forma!: FormGroup

  constructor(private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [
        Validators.required
      ]],
      'apellido': ['', Validators.required],
      'edad': ['', [
        Validators.required,
        Validators.min(12),
        Validators.max(100)
      ]],
      'sexo': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'terminos': ['', Validators.required]
    })
  }

  enviar(){
    console.info("Objeto Formulario", this.forma);
  }

  cambiarPais(country:string){
    (<HTMLInputElement>document.getElementById("country")).value = country;
  }

}
