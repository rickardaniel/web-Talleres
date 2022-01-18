import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as printJS from 'print-js';
import * as es6printJS from 'print-js';

declare function abrirSegundoModal():any;
declare function print():any;

@Component({
  selector: 'app-cerrar-orden',
  templateUrl: './cerrar-orden.component.html',
  styleUrls: ['./cerrar-orden.component.scss']
})
export class CerrarOrdenComponent implements OnInit {

  @Input('elements3') elements3:any;

  elements4:any=[];

  constructor() { }

  ngOnInit(): void {
  }

  abrirSM(el:any){
    this.elements4 = el;
    console.log("si llega ->", this.elements4);
    
    abrirSegundoModal();
  }


  public openPDF():void {
    let DATA = document.getElementById('htmlData')!;
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
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

}
