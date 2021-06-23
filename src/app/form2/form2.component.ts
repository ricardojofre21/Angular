import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {

  salida!: string;
  promedio!: number;
  notaFinal!: number;

  formulario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
      nota4: new FormControl(''),
      examen: new FormControl(''),
    }),
  
  });

  enviar() {
    let nota1 = parseInt(this.formulario.value.notas.nota1);
    let nota2 = parseInt(this.formulario.value.notas.nota1);
    let nota3 = parseInt(this.formulario.value.notas.nota1);
    let nota4 = parseInt(this.formulario.value.notas.nota4);
    let examen = parseInt(this.formulario.value.notas.examen);
    this.promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    this.notaFinal=this.promedio*0.7 + examen*0.3;
    if (nota1 >= 4 && nota2 >= 4 && nota3 >= 4 && nota4 >= 4 && examen >=4) {
     
      this.salida="Aprueba el curso"
    } else {
      this.salida = "Reprueba el curso"
    }
  }

}
