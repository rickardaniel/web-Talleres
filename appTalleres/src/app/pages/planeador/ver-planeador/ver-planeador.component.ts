import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../../../services/all-service.service';

declare function slider5():any;
declare function slider6():any;


@Component({
  selector: 'app-ver-planeador',
  templateUrl: './ver-planeador.component.html',
  styleUrls: ['./ver-planeador.component.scss']
})
export class VerPlaneadorComponent implements OnInit {

  i:any;
  elements:any=[];

  elements2: any =[];

  url="orden_abierta";
  url1="planeador";

  constructor(private allService:AllServiceService) { }

  ngOnInit(): void {
   
      // slider6();
      //    this.listarTodos1();
    slider5();  
    this.listarTodos();
  
    
 

  }

  listarTodos1(){
    this.allService.getALLPlaneador(this.url, this.i).subscribe((data:any)=>{
   this.elements = data.data;
   console.log("datos ordenes abiertas =>", this.elements);
   
    })
   }

  listarTodos(){
   this.allService.getALL2(this.i).subscribe((data:any)=>{
  this.elements = data.data;
  console.log("datos ordenes =>", this.elements);
  
   })
  }
enviarDatos(el :any){
this.elements2 = [el];
console.log("Esto se envia a la tabla",this.elements2);


}
}
