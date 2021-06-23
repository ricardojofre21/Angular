import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { Form1Component } from './form1/form1.component';
import { TablasComponent } from './tablas/tablas.component';
import { AzarComponent } from './azar/azar.component';
import { EnlacePropiedadesComponent } from './enlace-propiedades/enlace-propiedades.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    Form1Component,
    TablasComponent,
    AzarComponent,
    EnlacePropiedadesComponent,
    OpcionesComponent,
    Formulario1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
