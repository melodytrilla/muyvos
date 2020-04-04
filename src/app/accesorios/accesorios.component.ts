import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { AccesoriosService } from '../accesorios.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.sass'],
})
export class AccesoriosComponent implements OnInit {
  accesorio: {tipo: string};
  public acc: any[] = [];
  album:any = [];
  constructor(public service: AccesoriosService,
              private rutaActiva: ActivatedRoute,
              private _lightbox: Lightbox) { 
              
              }
  
  open(index: number): void {
    this._lightbox.open(this.album, index);
    }
   
  ngOnInit() {
    this.accesorio = {
      tipo: this.rutaActiva.snapshot.params.tipo
    };
    this.service.getAccesorios(this.accesorio.tipo).subscribe(data => {this.acc= data, data.forEach(value => {
      this.album.push({'src': value.imagen, 'caption': value.codigo + ' - ' + '$' + value.precio})
    })
  })
      }
    
      
    }

