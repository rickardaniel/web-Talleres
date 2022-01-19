import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  urlLogin = environment.accesoLogin;
  urlCors = environment.CORS;
  urlCommon = environment.common;
  urlEPL = environment.EPlogin;

  urlTalleres = environment.urlDemo;


  // url = environment.apiUrl;
  url="assets/data/atributos.json";
  url1="assets/data/orden.json";
  url3="assets/data/autos.json";

  URL = this.urlTalleres+'orden_abierta/all';

  constructor(private http:HttpClient ) { }

  atributos =['Marca','Año', 'Modelo','Km', 'Combustible' ]



  getEmpresa(cedula:any){
    return new Promise((resolve)=>{
      this.http.get(this.urlCors+this.urlLogin+cedula ).subscribe(data =>{
       resolve(data);
      })
    })
  }

  login(url:string,user:string, pass:string){
    return new Promise((resolve)=>{
      this.http.get(url+this.urlCommon+this.urlEPL+'user='+user+'&pwd='+pass).subscribe(data =>{
        resolve(data);
        console.log('URL =>', url+this.urlCommon+this.urlEPL+'user='+user+'&pwd='+pass);

        // console.log('https://sofpymes.com/demo/common/movil/login_empleado?user=app&pwd=1234');
        
        
      })
    })

  }

// ====================================== METODO GET GENERAL ==============================================

getAll(url:string){
  return new Promise((resolve)=>{
    this.http.get(this.urlTalleres+url+'/activo').subscribe(data=>{
      resolve(data);
    })
  })
}
// ====================================== METODO GET ORDEN ABIERTA ==============================================

getAllOA(url:string){
  return new Promise((resolve)=>{
    this.http.get(this.urlTalleres+url+'/activo_oa').subscribe(data=>{
      resolve(data);
    })
  })
}

  // ====================================== METODO GET ==================================================


  getALL(url:string, i:any):Observable<any[]>{
    return this.http.get<any[]>(this.urlTalleres+url+'/all');
  }
  getALLPlaneador(url:string, i:any):Observable<any[]>{
    return this.http.get<any[]>(this.urlTalleres+url+'/planeador');
  }
  getTODOS(url:string, i:any):Observable<any[]>{
    return this.http.get<any[]>(this.urlTalleres+url+'/todos');
  }
  getServicios(url:string, i:any):Observable<any[]>{
    return this.http.get<any[]>(this.urlTalleres+url+'/all_service');
  }


  // ===================================== METODO GET VEHÍCULO =======================================


  getVehiculo(url:string, placa:string){
    return new Promise((resolve)=>{
      this.http.get(this.urlTalleres+url+'/by_placa?placa='+placa).subscribe(data=>{

        resolve(data);
             
      })
    })
  }
  getCliente(url:string, ci:string){
    return new Promise((resolve)=>{
      this.http.get(this.urlTalleres+url+'/by_ci_name?buscar='+ci).subscribe(data=>{

        resolve(data);
             
      })
    })
  }

  // ====================================== OBTENER POR ID ===========================================


  getForID( url:string, id:string){
    return new Promise ((resolve)=>{
      this.http.get(this.urlTalleres+url+'/by_id?id='+id).subscribe(data=>{
        resolve(data);

        // console.log("url por ID = ", this.urlTalleres+url+'/oneByID?id='+id);
        
      })
    })
  }
  


  // ====================================== METODO POST ==================================================



  postALL(form:any, url:string){
    let Options ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body:form
    }
    return this.http.post(this.urlCors+this.urlTalleres+url+'/insert', form, Options);
  
  }

  // ====================================== METODO PUT ==================================================

  putALL(form:any, url:string, id:string){
    console.log("entro al metodo este es el id=", id, "esta la url =>", url , "este es el form =>", form);
    console.log(this.urlCors+this.urlTalleres+url+'/update_by_id/id/'+id);

    return this.http.post(this.urlCors+this.urlTalleres+url+'/update_by_id/id/'+id, form);
    
  }

    // =========================================== HABILITAR ==================================================

    enable(form: any, url:string,id: string, ){
      let Options ={
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        }),
        body:form
      }
      return this.http.get(this.urlCors+this.urlTalleres+url+'/enable?id='+id, Options)


    }
    





      // ====================================== DESHABILITAR ==================================================
  

      disabled(form: any,url:string, id:string){
        let Options ={
          headers: new HttpHeaders({
            'Content-type': 'application/json'
          }),
          body:form
        }

  return this.http.get(this.urlCors+this.urlTalleres+url+'/delete?id='+id, Options)
   
       }

      disabled2(form: any,url:string, id:string){
        let Options ={
          headers: new HttpHeaders({
            'Content-type': 'application/json'
          }),
          body:form
        }

  return this.http.get(this.urlCors+this.urlTalleres+url+'/disable?id='+id, Options)
   
       }


  getAtributos(){
    return this.atributos;
  }

  // getALL2(i:any):Observable<any[]>{
  //   console.log("URL ",this.URL);  
  //   return this.http.get<any[]>(this.URL); 
  // }
  getALL2(i:any):Observable<any[]>{
    return this.http.get<any[]>(this.url1);
    return this.http.get<any[]>(this.URL);
  
  }
  // getALL(url:string, i:any):Observable<any[]>{
  //   return this.http.get<any[]>(this.urlTalleres+url+'/all');
  // }


}
