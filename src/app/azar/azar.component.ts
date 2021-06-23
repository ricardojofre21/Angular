import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azar',
  templateUrl: './azar.component.html',
  styleUrls: ['./azar.component.css']
})
export class AzarComponent implements OnInit {
  valor!: number;
  dato!: any;
  constructor() { }

  ngOnInit(): void {

  }
  numerosAzar() {
    let numeros: number[] = [];
    this.valor = 0;
    while (numeros.length < 15) {
      let esRepetido = false;
      this.valor = Math.trunc(Math.random() * 25) + 1;
      for (let i = 0; i < numeros.length; i++) {
        if (this.valor == numeros[i]) {
          esRepetido = true;
        }
      }
      if (esRepetido == false) {
        numeros.push(this.valor);
      }
    }
    this.dato = numeros;
    console.log(numeros);
  }
}
