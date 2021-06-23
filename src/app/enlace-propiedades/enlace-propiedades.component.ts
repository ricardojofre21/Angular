import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlace-propiedades',
  templateUrl: './enlace-propiedades.component.html',
  styleUrls: ['./enlace-propiedades.component.css']
})
export class EnlacePropiedadesComponent implements OnInit {
  @Input() datos!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
