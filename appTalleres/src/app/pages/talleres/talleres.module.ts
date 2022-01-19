import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalleresRoutingModule } from './talleres-routing.module';

import { ServiciosComponent } from './servicios/servicios.component';
import { EstadosComponent } from './estados/estados.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { PrioridadesComponent } from './prioridades/prioridades.component';
import { PrioridadMantenimientoComponent } from './prioridad-mantenimiento/prioridad-mantenimiento.component';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { AtributoComponent } from './atributos/atributo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { VehiculoComponent } from './vehiculo/vehiculo.component';


@NgModule({
  declarations: [
    AtributoComponent,
    ServiciosComponent,
    EstadosComponent,
    PoliticasComponent,
    PrioridadesComponent,
    PrioridadMantenimientoComponent,
    VehiculoComponent,

  
  ],
  imports: [
    CommonModule,
    TalleresRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule
  ],
})
export class TalleresModule { }
