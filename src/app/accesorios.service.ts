import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  apiURL= "http://localhost:3000";
  items: any[] = []
  constructor(private httpClient: HttpClient) { }

  init(){
    if (window.sessionStorage['carrito']){
      this.items = JSON.parse(window.sessionStorage['carrito'])
      console.log("hshshshsh")
    }
    else{
      this.items = []
    }
  }
  getAccesorios(tipo: string): Observable<any>{
    tipo = encodeURIComponent(tipo);
    return this.httpClient.get<any>(
    `${this.apiURL}/${tipo}`
    )
  }
  addItems(i){
    console.log(i);
    console.log(this.items)
    this.items.push(i);
    this.guardarSesion();
  }
  guardarSesion(){
    window.sessionStorage['carrito']=JSON.stringify(this.items)
  }
  getItems(){
    return JSON.parse(window.sessionStorage['carrito'])
  }
  borrarItem(i){
    this.items.splice(i);
    this.guardarSesion()
  }
}
