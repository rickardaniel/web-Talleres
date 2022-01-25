import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
   

    slider5();  
      // slider6();
      //    this.listarTodos1();
      this.listarTodos1();


   



    
    // this.listarTodos1();
    // this.listarTodos();
  
    
 

  }

  listarTodos1(){
    this.allService.getALLPlaneador(this.url, this.i).subscribe((data:any)=>{
   this.elements = data.data;

   console.log("datos del planeador =>", this.elements);

   
    })
   }

  // listarTodos(){
  //  this.allService.getALL2(this.i).subscribe((data:any)=>{
  // this.elements = data.data;
  // console.log("datos ordenes =>", this.elements);
  
  //  })
  // }
enviarDatos(el :any){
this.elements2 = [el];
console.log("Esto se envia a la tabla",this.elements2);

}

enviarDatos1(id:any){
  console.log("id que me llega", id);
  
  this.allService.getForID(this.url, id).then((data:any)=>{
    console.log('Elemtos que me llegan =>',data);
    
  })

}
}
