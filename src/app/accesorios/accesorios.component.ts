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
    
  pulseras = [

  ]
  colitas= [
    {
      codigo: "co100",
      imagen: "../assets/accesorios/colitas/1.jpg",
      precio: "70",
      descripcion: "Colita con strass"
    },
    {
      codigo: "co101",
      imagen: "../assets/accesorios/colitas/2.jpg",
      precio: "70",
      descripcion: "Colita con strass"
    },
    {
      codigo: "co102",
      imagen: "../assets/accesorios/colitas/3.jpg",
      precio: "70",
      descripcion: "Colita con strass"
    },
    {
      codigo: "co103",
      imagen: "../assets/accesorios/colitas/4.jpg",
      precio: "70",
      descripcion: "Colita con strass"
    }
  ]
  vinchas = [
    {
      codigo: "vi100",
      imagen: "../assets/accesorios/vinchas/1.jpg",
      precio: "110",
      descripcion: "Vincha"
    },
    {
      codigo: "vi101",
      imagen: "../assets/accesorios/vinchas/2.jpg",
      precio: "120",
      descripcion: "Vincha"
    },
    {
      codigo: "vi102",
      imagen: "../assets/accesorios/vinchas/3.jpg",
      precio: "120",
      descripcion: "Vincha"
    },
    {
      codigo: "vi103",
      imagen: "../assets/accesorios/vinchas/4.jpg",
      precio: "150",
      descripcion: "Vincha"
    },
    {
      codigo: "vi104",
      imagen: "../assets/accesorios/vinchas/5.jpg",
      precio: "170",
      descripcion: "Vincha"
    },
    {
      codigo: "vi105",
      imagen: "../assets/accesorios/vinchas/6.jpg",
      precio: "170",
      descripcion: "Vincha"
    },
    {
      codigo: "vi106",
      imagen: "../assets/accesorios/vinchas/7.jpg",
      precio: "120",
      descripcion: "Vincha"
    },
    {
      codigo: "vi107",
      imagen: "../assets/accesorios/vinchas/8.jpg",
      precio: "130",
      descripcion: "Vincha"
    },
    {
      codigo: "vi108",
      imagen: "../assets/accesorios/vinchas/9.jpg",
      precio: "120",
      descripcion: "Vincha"
    },
    {
      codigo: "vi109",
      imagen: "../assets/accesorios/vinchas/10.jpg",
      precio: "120",
      descripcion: "Vincha"
    },
    {
      codigo: "vi110",
      imagen: "../assets/accesorios/vinchas/11.jpg",
      precio: "160",
      descripcion: "Vincha"
    },
    {
      codigo: "vi111",
      imagen: "../assets/accesorios/vinchas/12.jpg",
      precio: "160",
      descripcion: "Vincha"
    }
  ]
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
    console.log(this.accesorio.tipo)
    if (this.accesorio.tipo == 'collares'){
      console.log(this.collares);
      this.acc = this.collares;
      console.log(this.acc)
    }
    else if (this.accesorio.tipo == "colitas"){
      this.acc = this.colitas
    }
    else if (this.accesorio.tipo == "vinchas"){
      this.acc = this.vinchas
    }
    /*this.service.getAccesorios(this.accesorio.tipo).subscribe(data => {this.acc= data, 
      data.forEach(value => {
      this.album.push({'src': value.imagen, 'caption': value.codigo + ' - ' + '$' + value.precio})
    })
  })*/
      }
    
      
    }

