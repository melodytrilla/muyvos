import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  apiURL= "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getAccesorios(tipo: string): Observable<any>{
    tipo = encodeURIComponent(tipo);
    return this.httpClient.get<any>(
    `${this.apiURL}/${tipo}`
    )
  }
}
