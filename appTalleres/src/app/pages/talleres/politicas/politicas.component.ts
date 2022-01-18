import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { AllServiceService } from 'src/app/services/all-service.service';
import { PoliticaModel } from '../../Modelos/politicas.model';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent implements OnInit {

  searchText: string = '';
 
  elements :any=[];
  elements2:any;
  previous: string;
  // eA= EditarAtributoComponent;
  // path ='bus';
  i: PoliticaModel

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


formCrearAtributo = new FormGroup({
  nombre: new FormControl('', [Validators.required]),
  detalle: new FormControl('', [Validators.required]),
  orden: new FormControl('', [Validators.required])
  })
  
  formEditarAtributo = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl('', [Validators.required]),
    orden: new FormControl('', [Validators.required])
    })
  
  get f()
  {
      return this.formCrearAtributo.controls;   
  }
  
  resetear(){
  
  }

  //  ==========================================+ METODOS CRUD ROLES +======================================================

listarTodos(){
  this.allService.getALL('atributo',this.i).subscribe(data => {
    console.log(data);
      this.elements= data;
      this.elements = this.elements.data;
      this.mdbTable.setDataSource(this.elements);
      this.elements = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
    });
}
// =============================================== BUSCAR POR ID ============================================================




// ==================================================== CREAR ===============================================================


crear(form:any){
}

// ================================================== ACTUALIZAR ============================================================

editar(form:any){}

}
