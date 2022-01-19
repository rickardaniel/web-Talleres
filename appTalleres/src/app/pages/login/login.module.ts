import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccesoTalleresComponent } from './acceso-talleres/acceso-talleres.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccesoTalleresComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
