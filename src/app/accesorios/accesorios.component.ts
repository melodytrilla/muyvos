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
  album:  any[] = [];

  collares = [
    {
      codigo: "c100",
      imagen: "https://i.pinimg.com/originals/95/41/cf/9541cfe47c3e3941f765edaf03c2fe8e.jpg",
      precio: "334",
      tipo: "collar",
      descripcion: "Chocker"
    },
    {
      codigo: "c101",
      imagen: "https://previews.123rf.com/images/reamolko/reamolko1601/reamolko160100046/51440212-collares-de-cadena-de-oro-fijadas-con-los-colgantes-redondos-y-rub%C3%AD-tri%C3%A1ngulo-y-de-la-perla-vector-de-di.jpg",
      precio: "335",
      tipo: "collar",
      descripcion: "Collar"
    },
    {
      codigo: "c102",
      imagen: "https://www.dhresource.com/600x600/f2/albu/g10/M01/F9/3D/rBVaVlwPdRmAabhWAAHIAr-IKvw751.jpg",
      precio: "100",
      tipo: "collar",
      descripcion: "Chocker"
    },
    {
      codigo: "c102",
      imagen: "https://www.dhresource.com/600x600/f2/albu/g10/M01/F9/3D/rBVaVlwPdRmAabhWAAHIAr-IKvw751.jpg",
      precio: "100",
      tipo: "collar",
      descripcion: "Chocker"
    }]
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
    this.acc = this.collares;
    this.service.getAccesorios(this.accesorio.tipo).subscribe(data => {this.acc= data, 
      data.forEach(value => {
      this.album.push({'src': value.imagen, 'caption': value.codigo + ' - ' + '$' + value.precio})
    })
  })
      }
    
      
    }

