import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planeador-detalle',
  templateUrl: './planeador-detalle.component.html',
  styleUrls: ['./planeador-detalle.component.scss']
})
export class PlaneadorDetalleComponent implements OnInit {

  @Input('elements2') elements2:any;

  elements3:any=[];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  cerrarCaso(el:any){
    this.elements3 = el;
    console.log("esto debe enviarse por el Input", this.elements2);
    
//  this.router.navigate(['planeador/cerrar_orden']);
  }

  printJS(){
    print();
  }


}
