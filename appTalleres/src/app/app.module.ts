import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenIngresoModule } from './pages/orden-ingreso/orden-ingreso.module';
import { SharedModule } from './pages/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdenIngresoModule,
    SharedModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
