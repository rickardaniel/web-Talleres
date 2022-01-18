import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { AllServiceService } from 'src/app/services/all-service.service';
import Swal from 'sweetalert2';
import { EstadoModel } from '../../Modelos/estado.model';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {


  searchText: string = '';
 
  elements :any=[];
  elements1 :any=[];
  elements2:any;
  previous: string;

  i: EstadoModel;

  url='estado';

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
    

  //  ==========================================+ METODOS CRUD ROLES +======================================================

  listarTodos(){
    this.allService.getALL(this.url,this.i).subscribe(data => {
      // console.log("datos atributos =>",data);
        this.elements= data;
        this.elements = this.elements.data;
        console.log("data atributos =>", this.elements);
        
        this.mdbTable.setDataSource(this.elements);
        this.elements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      });
  }

// ==================================================== CREAR ===============================================================


crear(form: EstadoModel){

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
editar( form:EstadoModel, id: string){

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

  let form:EstadoModel = this.formEditar.value;

  console.log("id que debe llegar =>", id);
  
  this.allService.disabled(form,this.url,id).subscribe(data =>{
    console.log("lo que se va a eliminar", data, "AAUIIi");

    Swal.fire({
      icon: 'success',
      title: 'Estado deshabilitado',
      text: '¡El estado se ha deshabilitado correctamente!',
      
    })
  this.listarTodos();
  })

}


// =================================================== HABILITAR ======================================================================

habilitar(id:string){

  let form:EstadoModel = this.formEditar.value;
  this.allService.enable(form, this.url,id).subscribe(data=>{
    console.log("Atributo habilitada", data);

    Swal.fire({
      icon: 'success',
      title: 'Estado habilitado',
      text: '¡El estado se ha habilitado correctamente!',   
    })
   this.listarTodos();
    
  })

}
}