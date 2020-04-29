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

  getAccesorios(tipo: string): Observable<any>{
    tipo = encodeURIComponent(tipo);
    return this.httpClient.get<any>(
    `${this.apiURL}/${tipo}`
    )
  }
  addItems(i){
  //  console.log(this.items);
  //  this.items.push(JSON.stringify(i))
   // sessionStorage.setItem('myArray', JSON.stringify());
  }
  getItems(){
  //  var array = sessionStorage.getItem('myArray');
// Se parsea para poder ser usado en js con JSON.parse :)
   // console.log(array)
    return this.items
  }
}
