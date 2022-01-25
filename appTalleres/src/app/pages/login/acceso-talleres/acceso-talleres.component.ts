import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllServiceService } from 'src/app/services/all-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare function mostrarForm():any;
  


@Component({
  selector: 'app-acceso-talleres',
  templateUrl: './acceso-talleres.component.html',
  styleUrls: ['./acceso-talleres.component.scss']
})
export class AccesoTalleresComponent implements OnInit {

  elements:any;
  elements2:any;

  constructor(private allService : AllServiceService, private route: Router) { }
   tam:any;
  ngOnInit(): void {


     
    mostrarForm();
   
   
  }

  formRecuperarEmpresa = new FormGroup({
    ruc: new FormControl('', Validators.required)
  })

  formIngresoTalleres = new FormGroup({
    user: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  })

  obtenerEmpresa(form:any){
this.allService.getEmpresa(form.ruc).then((data:any)=>{


  console.log('lo que viene', form.ruc);
  
  this.elements = data;
  console.log("datos de la empresa", this.elements);
  
  const tam =this.elements.length;

  console.log("el tamanio es =>", tam);
  
  if(tam == 0){
  
    Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text:'RUC no existe' 
        })

  }else if(tam == 1){


  }

  

})
  }

  accesoTalleres(form:any, datos:any){

    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      title:'info',
      text:'Espere por favor'
  
      });
      Swal.showLoading();
    let url = datos[0].url;
    console.log("esta es la url", url);
    console.log("user", form.user);
    console.log("pass", form.pass);
    this.allService.login(url, form.user, form.pass).then((data:any)=>{
      this.elements2 = data;
      Swal.close(); 
      // console.log('datos => ', this.elements2);
      // console.log('respuesta => ', this.elements2.rta);
      // console.log('mensaje => ', this.elements2.msg);
      

      // console.log('AQUI ESTA LA URL ==> ', url);
      
      

      if(this.elements2.rta == 1){
  
        console.log('ACCESO AUTORIZADO', this.elements2 );
        this.route.navigateByUrl('/orden/nueva_orden');
      }
      else if(this.elements2.rta ==0){ 
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text:'El usuario no tiene asignado un punto de venta' 
          })
      }
  
      
    }


    )    
    // )  , Swal.fire({
    //   icon: 'error',
    //   title: '¡Error!',
    //   text:'RUC no existe' 
    // })
    
    // this.allService.login()

  }

}
