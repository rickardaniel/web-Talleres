import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as printJS from 'print-js';
import * as es6printJS from 'print-js';
import { AllServiceService } from 'src/app/services/all-service.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehiculoModel } from '../../Modelos/vehiculo.model';
import { ServicioModel } from '../../Modelos/servicio.model';
import { EstadoModel } from '../../Modelos/estado.model';
import { identifierModuleUrl, ThrowStmt } from '@angular/compiler';

declare function print():any;

declare function  authG() :any;

declare function getLogueo():any;

declare function arregloValoresAuto(i:any, tam:any):any;
// declare function arregloValoresAuto2(i:any):any;

@Component({
  selector: 'app-nueva-orden',
  templateUrl: './nueva-orden.component.html',
  styleUrls: ['./nueva-orden.component.scss']
})

export class NuevaOrdenComponent implements OnInit {

  @ViewChild('htmlData') htmlData:ElementRef;



  atributos :any=[];
  prioridades :any=[];
  tecnicos :any=[];
  servicios :any=[];
  datosVehiculo:any=[];
  clientes:any=[];
  estados:any=[];


  arreglo:any =[];


  url='atributo';
  url1='prioridad';
  url2='vehiculo';
  url3='tecnico';
  url4='producto';
  url5='cliente';
  url6='estado';
  url7="orden_abierta";

  i:VehiculoModel;
  i2:ServicioModel;
  i3: EstadoModel;


  // celular='0968584986';
  // bandera=true;
  // sendMessage = "Hola este es un mensaje de prueba";

  constructor(private allService: AllServiceService) { }

  ngOnInit(): void {
  
    // this.enviarAtributo();
  this.enviarTecnico();
  this.enviarServicio();
  this.enviarEstado();
  this.enviarPrioridad();

  }



// =======================================FORMULARIOS===========================================

// FORM BUSCAR AUTO

formAuto = new FormGroup({
  placa : new FormControl('')
})
formCliente = new FormGroup({
  PersonaComercio_cedulaRuc : new FormControl('')
})


// FORM NUEVA ORDEN
formNuevaOrden = new FormGroup({

  cliente: new FormControl(''),
  atributos: new FormControl(),
  valores: new FormControl(),
  observaciones: new FormControl(''),
  tecnico: new FormControl(''),
  estado: new FormControl(''),
  servicio: new FormControl(''),
  secuencia: new FormControl(''),
  prioridad: new FormControl(''),
  evidencia1: new FormControl(''),
  evidencia2: new FormControl(''),
  evidencia3: new FormControl(''),
  evidencia4: new FormControl(''),
})


  enviarAtributo(){
    this.allService.getAll(this.url).then((data:any)=>{
      
      this.atributos = data.data;
      console.log(" atributos enviados => ", this.atributos);
      // console.log('=====>',this.atributos[0].nombreattr);
      
      
    })
  }
  enviarPrioridad(){
    this.allService.getAllOA(this.url1).then((data:any)=>{
      console.log("activos ", data);
      
      this.prioridades = data.data;
      console.log(" prioridades => ", this.prioridades);
      
    })
  }
  enviarTecnico(){
    this.allService.getTODOS(this.url3,this.i).subscribe(data => {
      console.log("activos ", data);
      
      this.tecnicos = data;
      this.tecnicos = this.tecnicos.data;
      console.log(" Técnicos enviados=> ", this.tecnicos);
      
    })
  }
  enviarServicio(){
    this.allService.getALL(this.url4,this.i2).subscribe(data => {
      console.log("activos ", data);
      
      this.servicios = data;
      this.servicios = this.servicios.data;
      console.log(" Servicios enviados=> ", this.servicios);
      
    })
  }

  enviarEstado(){

    this.allService.getALL(this.url6,this.i3).subscribe(data => {
      // console.log("datos atributos =>",data);
        this.estados= data;
        this.estados = this.estados.data;
        console.log("data estados =>", this.estados);
    

  })
}

authGoogle(){
  console.log("datos de logueo");
  authG();
 
  
}

  // ===================================================== Métodos PDF =========================================================

  public openPDF():void {
    let DATA = document.getElementById('htmlData')!;
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('OrdenIngreso.pdf');
    });     
  }

  printTest() {
 
    console.log({
      node_module: printJS,
      es6_module: es6printJS
    });
    es6printJS("imprimir", "html");
  }


  printJS(){
    print();
  }

  // ================================= MOSTRAR OCULTAR DIVS ========================================
mostrarTarjetaVehiculo(){
  let div = document.getElementById('divAtributos');
  div?.removeAttribute('hidden');
}

ocultarTarjetaVehiculo(){
  let div = document.getElementById('divAtributos');
  div?.setAttribute('hidden', '');
}
mostrarTarjetaAtributos(){
  let div = document.getElementById('crearAtributos');
  div?.removeAttribute('hidden');

}

ocultarTarjetaAtributos(){
  let div = document.getElementById('crearAtributos');
  div?.setAttribute('hidden', '')
}
mostrarTarjetaCliente(){
  let div = document.getElementById('infoCliente');
  div?.removeAttribute('hidden');

}

ocultarTarjetaCliente(){
  let div = document.getElementById('crearAtributos');
  div?.setAttribute('hidden', '')
}




  obtenerVehiculo(form:any){
    let placa = form.placa;
    console.log('esta es la placa', placa);
    
    this.allService.getVehiculo(this.url2, placa).then((data:any)=>{
      console.log(" respuesta ", data.rta); 

  if(data.rta == true){
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      title:'info',
      text:'Vehículo encontrado'
      });
    this.mostrarTarjetaVehiculo();
    console.log("Este es un mensaje de prueba");
    this.datosVehiculo = data.data;
    console.log("Datos vehiculo => ", this.datosVehiculo);
    
    this.ocultarTarjetaAtributos();
  }else{

    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: 'No hay datos que correspondan a esa placa, por favor ingrese los datos del vehículo'
}) 

this.mostrarTarjetaAtributos();
this.enviarAtributo();
this.ocultarTarjetaVehiculo();

  }
  
  })
}


obtenerCliente(form:any){
  let dni = form.PersonaComercio_cedulaRuc;
  this.allService.getCliente(this.url5, dni).then((data:any)=>{

// console.log("info del cliente ", this.clientes);
// console.log("tamanio ---> ", this.clientes.length);


if(data.data.length > 0){
  Swal.fire({
    allowOutsideClick:false,
    icon:'info',
    title:'info',
    text:'Cliente encontrado'
    });
    this.clientes = data.data;

    // console.log('infofofofof',this.formNuevaOrden);
    
    this.mostrarTarjetaCliente();
}

  })

}

// ======================================= CREAR ORDEN ================================================


enviarDatosVehiculo(form:any){

let arrayDatosVehiculo = new Array(this.datosVehiculo.length);
let arrayValoresVehiculo = new Array(this.datosVehiculo.length);

for (let index = 0; index < this.datosVehiculo.length; index++) {

  arrayDatosVehiculo[index] =  this.datosVehiculo[index].equipoattr_id;
  arrayValoresVehiculo[index]= this.datosVehiculo[index].valor;


}
form.cliente = this.clientes[0].PersonaComercio_cedulaRuc;
form.atributos = arrayDatosVehiculo;
form.valores = arrayValoresVehiculo ;

console.log("Form método presentar",form);

}


ingresarDatosVehiculo(form:any){
 let arrayIdAtributosAcrear = new Array(this.atributos.length);

 let arrayValoresaCrear = new Array(this.atributos.length);

 for (let i = 0; i < this.atributos.length; i++) {

  arrayIdAtributosAcrear[i] = this.atributos[i].id;
  
  arrayValoresaCrear[i] =  arregloValoresAuto(i,this.atributos.length );
  
   // console.log( 'elemetos que se van a crear',arrayIdAtributosAcrear);
   // console.log( 'valores que se van a crear', arrayValoresaCrear);

 }


 form.cliente = this.clientes[0].PersonaComercio_cedulaRuc;
 form.atributos = arrayIdAtributosAcrear;
 form.valores = arrayValoresaCrear;

 console.log("Form ingresar datos",form);
 
}


crearOrden(form:any){


 if(this.atributos.length != 0){

  this.ingresarDatosVehiculo(form);
  

  // console.log('Primer formulario',form);

 }else if(this.datosVehiculo.length > 0 || this.atributos.length != 0)  {



 
this.enviarDatosVehiculo(form);

    
 }
    // console.log(form);
    this.allService.postALL(form, this.url7).subscribe(data=>{
        console.log("datos enviados", data);

  })
}

  

   }
