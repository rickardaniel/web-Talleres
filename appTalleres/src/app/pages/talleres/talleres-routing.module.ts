import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtributoComponent } from './atributos/atributo.component';
import { EstadosComponent } from './estados/estados.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PrioridadesComponent } from './prioridades/prioridades.component';
import { PrioridadMantenimientoComponent } from './prioridad-mantenimiento/prioridad-mantenimiento.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const routes: Routes = [
  {
    path:'ver_atributos', component: AtributoComponent
  },
  
  {
    path:'ver_servicios', component: ServiciosComponent
  },
  {
    path:'ver_estados', component: EstadosComponent
  },
  {
    path:'ver_politicas', component: PoliticasComponent
  },
  {
    path:'ver_prioridad', component: PrioridadesComponent
  },
  {
    path:'ver_prioridad_mantenimiento', component: PrioridadMantenimientoComponent
  },
  {
    path:'ver_vehiculo', component: VehiculoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalleresRoutingModule { }
