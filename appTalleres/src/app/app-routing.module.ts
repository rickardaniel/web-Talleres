import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaOrdenComponent } from './pages/orden-ingreso/nueva-orden/nueva-orden.component';

const routes: Routes = [

  {
    path:'login', loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'login/acceso', component: NuevaOrdenComponent
  },
  {
    path:'', redirectTo:'login/acceso', pathMatch:'full'
  },
  {
    path:'orden', loadChildren:()=>import('./pages/orden-ingreso/orden-ingreso.module').then(m=>m.OrdenIngresoModule)
  },
  {
    path:'header', loadChildren:()=>import('./pages/shared/shared.module').then(m=>m.SharedModule)
  },
  {
    path:'talleres', loadChildren:()=>import('./pages/talleres/talleres.module').then(m=>m.TalleresModule)
  },
  {
    path:'planeador', loadChildren:()=>import('./pages/planeador/planeador.module').then(m=>m.PlaneadorModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
