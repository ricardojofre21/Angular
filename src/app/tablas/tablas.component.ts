import { Component } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent  {

  // nombre = 'Pedro Soto';
  // edad = 25;
  // email = 'psoto@gmail.com';
  // estado = true;

  sueldos = [1200, 1250, 1500, 1250, 1530, 2500];
  notas = [50, 60, 70, 60, 70];
  actividad = ['supervisor', 'supervisor', 'Encargado de obra', 'encargado de obra', 'encargado de obra']
  datos:any []=[this.sueldos,this.notas,this.actividad];


  
  
  // tieneTrabajo() {
  //   if (this.estado) {
  //     return 'Tiene trabajo'
  //   } else {
  //     return 'No tiene trabajo'
  //   }
  // }
  // sumarSueldos() {
  //   let suma = 0;
  //   for (let i = 0; i < this.sueldos.length; i++) {
  //     suma = suma + this.sueldos[i];
  //   }
  //   return suma;
  // }
  // calcularPromedio(){
  //   let suma = 0;
  //   let promedio = 0;
  //   for (let i = 0; i < this.notas.length; i++) {
  //     suma = suma + this.notas[i];
  //   }
  //   promedio = suma/this.notas.length;
  //   return promedio;
  // }
}
