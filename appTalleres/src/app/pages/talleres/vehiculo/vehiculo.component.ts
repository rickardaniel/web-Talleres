import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { VehiculoModel } from '../../Modelos/vehiculo.model';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { AllServiceService } from '../../../services/all-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AtributoModel } from '../../Modelos/atributo.model';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  searchText: string = '';
 
  elements :any=[];
  elements1 :any=[];
  atributos :any=[];
  elements2:any;
  previous: string;

  i: VehiculoModel;
  i2: AtributoModel;

  url='estado';
  url1='atributo';

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;

  constructor(private allService: AllServiceService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listarTodos();
  }
  @HostListener('input') oninput() {
    this.searchItems();
  } 

  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
        this.mdbTable.setDataSource(this.previous);
        this.elements = this.mdbTable.getDataSource();
        
    }
        
    if (this.searchText) {
        this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
        this.mdbTable.setDataSource(prev);

    }
}
ngAfterViewInit() {
  this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
  this.mdbTablePagination.calculateFirstItemIndex();
  this.mdbTablePagination.calculateLastItemIndex();
  this.cdRef.detectChanges();
}
// ================================================= FORMULARIOS=========================================================


formCrear = new FormGroup({
  nombre: new FormControl('', [Validators.required]),
  detalle: new FormControl('', [Validators.required]),
  // orden: new FormControl('', [Validators.required])
  })
  
  formEditar = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl('', [Validators.required]),
    // orden: new FormControl('', [Validators.required])
    })
  
  get f()
  {
      return this.formCrear.controls;   
  }
  get f1()
  {
      return this.formEditar.controls;   
  }
  
  resetear(){
  
  }

  enviar(el:any){
    this.elements1 = el;
    }


    // ================================================== ENVIAR ATRIBUTO ========================================================

    enviarAtributo(){
      this.allService.getAll(this.url1).then((data:any)=>{
        console.log("activos ", data);
        
        this.atributos = data;
        console.log(" atributos enviados => ", this.atributos);
        
      })
    }

      //  ==========================================+ METODOS CRUD ROLES +======================================================

  listarTodos(){
    this.allService.getALL(this.url,this.i).subscribe(data => {
      // console.log("datos atributos =>",data);
        this.elements= data;
        this.elements = this.elements.data;
        console.log("data vehículos =>", this.elements);
        
        this.mdbTable.setDataSource(this.elements);
        this.elements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      });
  }

  // ==================================================== CREAR ===============================================================


crear(form: VehiculoModel){

  this.allService.postALL(form, this.url).subscribe(data=>{
    console.log("esto debe guardarse ", data);
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      title:'info',
      text:'Estado creado correctamente'
      });
      this.formCrear.reset();
      this.listarTodos();
        // cerrarModal('#modalCrearAtributo');
     
  },(err)=>{    
Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: err.error.message,
})      
    console.log(err.error.message);
      // this.formCrearUnidad.reset();
 }) 
}

// =============================================== BUSCAR POR ID ============================================================

obtenerPorID(id:string){

  console.log("Id que me llega => ", id);
  
  this.allService.getForID(this.url, id).then((atributo:any)=>{

    console.log("info ", atributo);
    
    this.elements1 = atributo;
    console.log("Datos unicos=", this.elements1);
    this.formEditar.setValue({
  'nombre': this.elements1.nombre,
  'detalle': this.elements1.detalle
});
console.log("datos form", this.formEditar.value);
    
  })
}



// ================================================== ACTUALIZAR ============================================================
editar( form:VehiculoModel, id: string){

  this.allService.putALL(form, this.url,id).subscribe(data=>{
    console.log("unidad mofificada"); 
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      title:'info',
      text:'Atributo actualizada correctamente'
      }); 
      // cerrarModal("#modalEditarAtributo");
      this.listarTodos();
  },(err)=>{    
    Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: err.error.message,
    })      
        console.log(err.error.message);
          this.formCrear.reset();
      }) 
  
}


// =================================================== DESHABILITAR ======================================================================


deshabilitar(id:any){

  let form:VehiculoModel = this.formEditar.value;

  console.log("id que debe llegar =>", id);
  
  this.allService.disabled2(form,this.url,id).subscribe(data =>{
    console.log("lo que se va a eliminar", data, "AAUIIi");

    Swal.fire({
      icon: 'success',
      title: 'Atributo deshabilitado',
      text: '¡El atributo se ha deshabilitado correctamente!',
      
    })
  this.listarTodos();
  })

}


// =================================================== HABILITAR ======================================================================

habilitar(id:string){

  let form:VehiculoModel = this.formEditar.value;
  this.allService.enable(form, this.url,id).subscribe(data=>{
    console.log("Atributo habilitada", data);

    Swal.fire({
      icon: 'success',
      title: 'Atrinuto habilitado',
      text: '¡El atributo se ha habilitado correctamente!',   
    })
   this.listarTodos();
    
  })

}
    

}
