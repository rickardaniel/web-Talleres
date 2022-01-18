import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaneadorRoutingModule } from './planeador-routing.module';
import { VerPlaneadorComponent } from './ver-planeador/ver-planeador.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PlaneadorDetalleComponent } from './planeador-detalle/planeador-detalle.component';
import { RouterModule } from '@angular/router';
import { CerrarOrdenComponent } from './cerrar-orden/cerrar-orden.component';



@NgModule({
  declarations: [
    VerPlaneadorComponent,
    PlaneadorDetalleComponent,
    CerrarOrdenComponent
  ],
  imports: [
    CommonModule,
    PlaneadorRoutingModule,
    SharedModule,
    MDBBootstrapModule,
    RouterModule,
   
  ],
  exports:[
    // PlaneadorDetalleComponent
  ]
})
export class PlaneadorModule { }
