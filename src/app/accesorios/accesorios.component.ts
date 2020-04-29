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
  album:  any = [];
  imag: string;

  abanicos = [
    {
      codigo: "ab100",
      imagen: "../assets/accesorios/abanicos/1.jpg",
      precio: "334",
      descripcion: "Abanico"
    },
    {
      codigo: "ab101",
      imagen: "../assets/accesorios/abanicos/2.jpg",
      precio: "334",
      descripcion: "Abanico"
    },
    {
      codigo: "ab102",
      imagen: "../assets/accesorios/abanicos/3.jpg",
      precio: "334",
      descripcion: "Abanico"
    },
    {
      codigo: "ab103",
      imagen: "../assets/accesorios/abanicos/4.jpg",
      precio: "334",
      descripcion: "Abanico"
    },
    {
      codigo: "ab104",
      imagen: "../assets/accesorios/abanicos/5.jpg",
      precio: "334",
      descripcion: "Abanico"
    },
    {
      codigo: "ab105",
      imagen: "../assets/accesorios/abanicos/6.jpg",
      precio: "334",
      descripcion: "Abanico"
    },
    {
      codigo: "ab106",
      imagen: "../assets/accesorios/abanicos/7.jpg",
      precio: "334",
      descripcion: "Abanico"
    },
    {
      codigo: "ab107",
      imagen: "../assets/accesorios/abanicos/8.jpg",
      precio: "230",
      descripcion: "Abanico"
    },
    {
      codigo: "ab108",
      imagen: "../assets/accesorios/abanicos/9.jpg",
      precio: "230",
      descripcion: "Abanico"
    },
    {
      codigo: "ab109",
      imagen: "../assets/accesorios/abanicos/10.jpg",
      precio: "230",
      descripcion: "Abanico"
    },
    {
      codigo: "ab110",
      imagen: "../assets/accesorios/abanicos/11.jpg",
      precio: "220",
      descripcion: "Abanico"
    },
    {
      codigo: "ab111",
      imagen: "../assets/accesorios/abanicos/12.jpg",
      precio: "220",
      descripcion: "Abanico"
    }
  ]
  abridores=[
    {
      codigo: "a100",
      imagen: "../assets/accesorios/abridores/1.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Oro"
    },
    {
      codigo: "a101",
      imagen: "../assets/accesorios/abridores/2.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Oro"
    },
    {
      codigo: "a102",
      imagen: "../assets/accesorios/abridores/3.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Oro"
    },
    {
      codigo: "a103",
      imagen: "../assets/accesorios/abridores/4.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Oro"
    },
    {
      codigo: "a104",
      imagen: "../assets/accesorios/abridores/5.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Oro"
    },
    {
      codigo: "a105",
      imagen: "../assets/accesorios/abridores/6.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a106",
      imagen: "../assets/accesorios/abridores/7.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a107",
      imagen: "../assets/accesorios/abridores/8.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a108",
      imagen: "../assets/accesorios/abridores/9.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a109",
      imagen: "../assets/accesorios/abridores/10.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a110",
      imagen: "../assets/accesorios/abridores/11.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a111",
      imagen: "../assets/accesorios/abridores/12.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a112",
      imagen: "../assets/accesorios/abridores/13.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a113",
      imagen: "../assets/accesorios/abridores/14.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a114",
      imagen: "../assets/accesorios/abridores/15.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a115",
      imagen: "../assets/accesorios/abridores/16.jpg",
      precio: "90",
      descripcion: "Abridor Acero"
    },
    {
      codigo: "a116",
      imagen: "../assets/accesorios/abridores/17.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Plata"
    },
    {
      codigo: "a117",
      imagen: "../assets/accesorios/abridores/18.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Plata"
    },
    {
      codigo: "a118",
      imagen: "../assets/accesorios/abridores/19.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Plata"
    },
    {
      codigo: "a119",
      imagen: "../assets/accesorios/abridores/20.jpg",
      precio: "90",
      descripcion: "Abridor Ench. Plata"
    },
  ]
  alcoholes=[
    {
      codigo: "ag100",
      imagen: "../assets/accesorios/alcoholEnGel/1.jpg",
      precio: "195",
      descripcion: "Alcohol en gel"
    },
    {
      codigo: "ag101",
      imagen: "../assets/accesorios/alcoholEnGel/2.jpg",
      precio: "195",
      descripcion: "Alcohol en gel"
    },
    {
      codigo: "ag102",
      imagen: "../assets/accesorios/alcoholEnGel/3.jpg",
      precio: "195",
      descripcion: "Alcohol en gel"
    },
    {
      codigo: "ag103",
      imagen: "../assets/accesorios/alcoholEnGel/4.jpg",
      precio: "195",
      descripcion: "Alcohol en gel"
    },
    {
      codigo: "ag104",
      imagen: "../assets/accesorios/alcoholEnGel/5.jpg",
      precio: "250",
      descripcion: "Alcohol en gel"
    },
    {
      codigo: "ag105",
      imagen: "../assets/accesorios/alcoholEnGel/6.jpg",
      precio: "195",
      descripcion: "Alcohol en gel"
    },
    {
      codigo: "ag106",
      imagen: "../assets/accesorios/alcoholEnGel/7.jpg",
      precio: "195",
      descripcion: "Alcohol en gel"
    },
    {
      codigo: "ag107",
      imagen: "../assets/accesorios/alcoholEnGel/8.jpg",
      precio: "195",
      descripcion: "Alcohol en gel"
    }
  ]
  anillos=[
    {
      codigo: "an100",
      imagen: "../assets/accesorios/anillos/1.jpg",
      precio: "520",
      descripcion: "Anillo"
    },
    {
      codigo: "an101",
      imagen: "../assets/accesorios/anillos/2.jpg",
      precio: "520",
      descripcion: "Anillo"
    },
    {
      codigo: "an102",
      imagen: "../assets/accesorios/anillos/3.jpg",
      precio: "250",
      descripcion: "Anillo"
    },
    {
      codigo: "an103",
      imagen: "../assets/accesorios/anillos/4.jpg",
      precio: "560",
      descripcion: "Anillo"
    },
    {
      codigo: "an104",
      imagen: "../assets/accesorios/anillos/5.jpg",
      precio: "230",
      descripcion: "Anillo"
    },
    {
      codigo: "an105",
      imagen: "../assets/accesorios/anillos/6.jpg",
      precio: "345",
      descripcion: "Anillo"
    },
    {
      codigo: "an106",
      imagen: "../assets/accesorios/anillos/7.jpg",
      precio: "510",
      descripcion: "Anillo"
    },
    {
      codigo: "an107",
      imagen: "../assets/accesorios/anillos/8.jpg",
      precio: "250",
      descripcion: "Anillo"
    },
    {
      codigo: "an108",
      imagen: "../assets/accesorios/anillos/9.jpg",
      precio: "250",
      descripcion: "Anillo"
    },
    {
      codigo: "an109",
      imagen: "../assets/accesorios/anillos/10.jpg",
      precio: "520",
      descripcion: "Anillo"
    },
    {
      codigo: "an110",
      imagen: "../assets/accesorios/anillos/11.jpg",
      precio: "125",
      descripcion: "Anillo"
    },
    {
      codigo: "an111",
      imagen: "../assets/accesorios/anillos/12.jpg",
      precio: "520",
      descripcion: "Anillo"
    },
    {
      codigo: "an112",
      imagen: "../assets/accesorios/anillos/13.jpg",
      precio: "720",
      descripcion: "Anillo"
    },
    {
      codigo: "an113",
      imagen: "../assets/accesorios/anillos/14.jpg",
      precio: "560",
      descripcion: "Anillo"
    },
    {
      codigo: "an114",
      imagen: "../assets/accesorios/anillos/15.jpg",
      precio: "235",
      descripcion: "Anillo"
    },
    {
      codigo: "an115",
      imagen: "../assets/accesorios/anillos/16.jpg",
      precio: "235",
      descripcion: "Anillo"
    },
    {
      codigo: "an116",
      imagen: "../assets/accesorios/anillos/17.jpg",
      precio: "498",
      descripcion: "Anillo"
    },
    {
      codigo: "an117",
      imagen: "../assets/accesorios/anillos/18.jpg",
      precio: "560",
      descripcion: "Anillo"
    },
    {
      codigo: "an118",
      imagen: "../assets/accesorios/anillos/19.jpg",
      precio: "280",
      descripcion: "Anillo"
    },
    {
      codigo: "an119",
      imagen: "../assets/accesorios/anillos/20.jpg",
      precio: "360",
      descripcion: "Anillo"
    },
    {
      codigo: "an120",
      imagen: "../assets/accesorios/anillos/21.jpg",
      precio: "460",
      descripcion: "Anillo"
    },
    {
      codigo: "an121",
      imagen: "../assets/accesorios/anillos/22.jpg",
      precio: "360",
      descripcion: "Anillo"
    },
    {
      codigo: "an122",
      imagen: "../assets/accesorios/anillos/23.jpg",
      precio: "360",
      descripcion: "Anillo"
    },
    {
      codigo: "an123",
      imagen: "../assets/accesorios/anillos/24.jpg",
      precio: "260",
      descripcion: "Anillo"
    },
    {
      codigo: "an124",
      imagen: "../assets/accesorios/anillos/25.jpg",
      precio: "435",
      descripcion: "Anillo"
    },
    {
      codigo: "an125",
      imagen: "../assets/accesorios/anillos/26.jpg",
      precio: "470",
      descripcion: "Anillo"
    },
    {
      codigo: "an126",
      imagen: "../assets/accesorios/anillos/27.jpg",
      precio: "360",
      descripcion: "Anillo"
    },
    {
      codigo: "an127",
      imagen: "../assets/accesorios/anillos/28.jpg",
      precio: "530",
      descripcion: "Anillo"
    },
    {
      codigo: "an128",
      imagen: "../assets/accesorios/anillos/29.jpg",
      precio: "185",
      descripcion: "Anillo"
    },
    {
      codigo: "an129",
      imagen: "../assets/accesorios/anillos/30.jpg",
      precio: "430",
      descripcion: "Anillo"
    },
    {
      codigo: "an130",
      imagen: "../assets/accesorios/anillos/31.jpg",
      precio: "360",
      descripcion: "Anillo"
    },
    {
      codigo: "an131",
      imagen: "../assets/accesorios/anillos/32.jpg",
      precio: "235",
      descripcion: "Anillo"
    },
    {
      codigo: "an132",
      imagen: "../assets/accesorios/anillos/33.jpg",
      precio: "235",
      descripcion: "Anillo"
    },
    {
      codigo: "an133",
      imagen: "../assets/accesorios/anillos/34.jpg",
      precio: "430",
      descripcion: "Anillo"
    },
    {
      codigo: "an134",
      imagen: "../assets/accesorios/anillos/35.jpg",
      precio: "250",
      descripcion: "Anillo"
    },
    {
      codigo: "an135",
      imagen: "../assets/accesorios/anillos/36.jpg",
      precio: "360",
      descripcion: "Anillo"
    },
    {
      codigo: "an136",
      imagen: "../assets/accesorios/anillos/37.jpg",
      precio: "380",
      descripcion: "Anillo"
    },
    {
      codigo: "an137",
      imagen: "../assets/accesorios/anillos/38.jpg",
      precio: "530",
      descripcion: "Anillo"
    },
    {
      codigo: "an138",
      imagen: "../assets/accesorios/anillos/39.jpg",
      precio: "310",
      descripcion: "Anillo"
    },
    {
      codigo: "an139",
      imagen: "../assets/accesorios/anillos/40.jpg",
      precio: "260",
      descripcion: "Anillo"
    },
    {
      codigo: "an140",
      imagen: "../assets/accesorios/anillos/41.jpg",
      precio: "470",
      descripcion: "Anillo"
    },
    {
      codigo: "an141",
      imagen: "../assets/accesorios/anillos/42.jpg",
      precio: "470",
      descripcion: "Anillo"
    },
    {
      codigo: "an142",
      imagen: "../assets/accesorios/anillos/43.jpg",
      precio: "530",
      descripcion: "Anillo"
    },
    {
      codigo: "an143",
      imagen: "../assets/accesorios/anillos/44.jpg",
      precio: "520",
      descripcion: "Anillo"
    },
  ]
  billeteras=[
    {
      codigo: "b100",
      imagen: "../assets/accesorios/billeteras/1.jpg",
      precio: "1200",
      descripcion: "Billetera"
    },
    {
      codigo: "b101",
      imagen: "../assets/accesorios/billeteras/2.jpg",
      precio: "1200",
      descripcion: "Billetera"
    },
    {
      codigo: "b102",
      imagen: "../assets/accesorios/billeteras/3.jpg",
      precio: "1100",
      descripcion: "Billetera"
    },
    {
      codigo: "b103",
      imagen: "../assets/accesorios/billeteras/4.jpg",
      precio: "950",
      descripcion: "Billetera"
    },
    {
      codigo: "b104",
      imagen: "../assets/accesorios/billeteras/5.jpg",
      precio: "1100",
      descripcion: "Billetera"
    },
    {
      codigo: "b105",
      imagen: "../assets/accesorios/billeteras/6.jpg",
      precio: "750",
      descripcion: "Billetera"
    },
    {
      codigo: "b106",
      imagen: "../assets/accesorios/billeteras/7.jpg",
      precio: "750",
      descripcion: "Billetera"
    },
    {
      codigo: "b107",
      imagen: "../assets/accesorios/billeteras/8.jpg",
      precio: "820",
      descripcion: "Billetera"
    },
    {
      codigo: "b108",
      imagen: "../assets/accesorios/billeteras/9.jpg",
      precio: "690",
      descripcion: "Billetera"
    },
    {
      codigo: "b109",
      imagen: "../assets/accesorios/billeteras/10.jpg",
      precio: "850",
      descripcion: "Billetera"
    },
    {
      codigo: "b110",
      imagen: "../assets/accesorios/billeteras/11.jpg",
      precio: "1100",
      descripcion: "Billetera"
    },
    {
      codigo: "b111",
      imagen: "../assets/accesorios/billeteras/12.jpg",
      precio: "780",
      descripcion: "Billetera"
    },
    {
      codigo: "b112",
      imagen: "../assets/accesorios/billeteras/13.jpg",
      precio: "890",
      descripcion: "Billetera"
    },
    {
      codigo: "b113",
      imagen: "../assets/accesorios/billeteras/14.jpg",
      precio: "680",
      descripcion: "Billetera"
    },
    {
      codigo: "b114",
      imagen: "../assets/accesorios/billeteras/15.jpg",
      precio: "850",
      descripcion: "Billetera"
    },
    {
      codigo: "b115",
      imagen: "../assets/accesorios/billeteras/16.jpg",
      precio: "890",
      descripcion: "Billetera"
    },
    {
      codigo: "b116",
      imagen: "../assets/accesorios/billeteras/17.jpg",
      precio: "890",
      descripcion: "Billetera"
    },
    {
      codigo: "b117",
      imagen: "../assets/accesorios/billeteras/18.jpg",
      precio: "630",
      descripcion: "Billetera"
    },
    {
      codigo: "b118",
      imagen: "../assets/accesorios/billeteras/19.jpg",
      precio: "480",
      descripcion: "Billetera"
    },
    {
      codigo: "b119",
      imagen: "../assets/accesorios/billeteras/20.jpg",
      precio: "650",
      descripcion: "Billetera"
    },
    {
      codigo: "b120",
      imagen: "../assets/accesorios/billeteras/21.jpg",
      precio: "1100",
      descripcion: "Billetera"
    },
    {
      codigo: "b121",
      imagen: "../assets/accesorios/billeteras/22.jpg",
      precio: "750",
      descripcion: "Billetera"
    },
    {
      codigo: "b122",
      imagen: "../assets/accesorios/billeteras/23.jpg",
      precio: "750",
      descripcion: "Billetera"
    },
    {
      codigo: "b123",
      imagen: "../assets/accesorios/billeteras/24.jpg",
      precio: "550",
      descripcion: "Billetera"
    },
    {
      codigo: "b124",
      imagen: "../assets/accesorios/billeteras/25.jpg",
      precio: "650",
      descripcion: "Billetera"
    },
    {
      codigo: "b125",
      imagen: "../assets/accesorios/billeteras/26.jpg",
      precio: "650",
      descripcion: "Billetera"
    },
    {
      codigo: "b126",
      imagen: "../assets/accesorios/billeteras/27.jpg",
      precio: "750",
      descripcion: "Billetera"
    },
    {
      codigo: "b127",
      imagen: "../assets/accesorios/billeteras/28.jpg",
      precio: "210",
      descripcion: "Billetera"
    },
    {
      codigo: "b128",
      imagen: "../assets/accesorios/billeteras/29.jpg",
      precio: "210",
      descripcion: "Billetera"
    },
    {
      codigo: "b129",
      imagen: "../assets/accesorios/billeteras/30.jpg",
      precio: "210",
      descripcion: "Billetera"
    },
    {
      codigo: "b130",
      imagen: "../assets/accesorios/billeteras/31.jpg",
      precio: "210",
      descripcion: "Billetera"
    },
    {
      codigo: "b131",
      imagen: "../assets/accesorios/billeteras/32.jpg",
      precio: "210",
      descripcion: "Billetera"
    }
  ]
  billeterasHombre=[
    {
      codigo: "bh100",
      imagen: "../assets/accesorios/billeterasHombre/1.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh101",
      imagen: "../assets/accesorios/billeterasHombre/2.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh102",
      imagen: "../assets/accesorios/billeterasHombre/3.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh103",
      imagen: "../assets/accesorios/billeterasHombre/4.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh104",
      imagen: "../assets/accesorios/billeterasHombre/5.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh105",
      imagen: "../assets/accesorios/billeterasHombre/6.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh106",
      imagen: "../assets/accesorios/billeterasHombre/7.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh107",
      imagen: "../assets/accesorios/billeterasHombre/8.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh108",
      imagen: "../assets/accesorios/billeterasHombre/9.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh109",
      imagen: "../assets/accesorios/billeterasHombre/10.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh110",
      imagen: "../assets/accesorios/billeterasHombre/11.jpg",
      precio: "",
      descripcion: "Billetera"
    },
    {
      codigo: "bh111",
      imagen: "../assets/accesorios/billeterasHombre/12.jpg",
      precio: "",
      descripcion: "Billetera"
    },
  ]
  carteras=[
    {
      codigo: "ca100",
      imagen: "../assets/accesorios/carteras/1.jpg",
      precio: "2900",
      descripcion: "Cartera"
    },
    {
      codigo: "ca101",
      imagen: "../assets/accesorios/carteras/2.jpg",
      precio: "2115",
      descripcion: "Cartera"
    },
    {
      codigo: "ca102",
      imagen: "../assets/accesorios/carteras/3.jpg",
      precio: "1980",
      descripcion: "Cartera"
    },
    {
      codigo: "ca103",
      imagen: "../assets/accesorios/carteras/4.jpg",
      precio: "2850",
      descripcion: "Cartera"
    },
    {
      codigo: "ca104",
      imagen: "../assets/accesorios/carteras/5.jpg",
      precio: "2970",
      descripcion: "Cartera"
    },
    {
      codigo: "ca105",
      imagen: "../assets/accesorios/carteras/6.jpg",
      precio: "1320",
      descripcion: "Cartera"
    },
    {
      codigo: "ca106",
      imagen: "../assets/accesorios/carteras/7.jpg",
      precio: "1100",
      descripcion: "Cartera"
    },
    {
      codigo: "ca107",
      imagen: "../assets/accesorios/carteras/8.jpg",
      precio: "1870",
      descripcion: "Cartera"
    },
    {
      codigo: "ca108",
      imagen: "../assets/accesorios/carteras/9.jpg",
      precio: "2460",
      descripcion: "Cartera"
    },
    {
      codigo: "ca109",
      imagen: "../assets/accesorios/carteras/10.jpg",
      precio: "1160",
      descripcion: "Cartera"
    },
    {
      codigo: "ca110",
      imagen: "../assets/accesorios/carteras/11.jpg",
      precio: "580",
      descripcion: "Cartera"
    },
    {
      codigo: "ca111",
      imagen: "../assets/accesorios/carteras/12.jpg",
      precio: "1400",
      descripcion: "Cartera"
    },
  ]
  cintos=[
    {
      codigo: "ci100",
      imagen: "../assets/accesorios/cintos/1.jpg",
      precio: "640",
      descripcion: "Cinto"
    },
    {
      codigo: "ci101",
      imagen: "../assets/accesorios/cintos/2.jpg",
      precio: "450",
      descripcion: "Cinto"
    },
    {
      codigo: "ci102",
      imagen: "../assets/accesorios/cintos/3.jpg",
      precio: "640",
      descripcion: "Cinto"
    },
    {
      codigo: "ci103",
      imagen: "../assets/accesorios/cintos/4.jpg",
      precio: "410",
      descripcion: "Cinto"
    },
    {
      codigo: "ci104",
      imagen: "../assets/accesorios/cintos/5.jpg",
      precio: "495",
      descripcion: "Cinto"
    },
    {
      codigo: "ci105",
      imagen: "../assets/accesorios/cintos/6.jpg",
      precio: "640",
      descripcion: "Cinto"
    },
    {
      codigo: "ci106",
      imagen: "../assets/accesorios/cintos/7.jpg",
      precio: "550",
      descripcion: "Cinto"
    },
    {
      codigo: "ci107",
      imagen: "../assets/accesorios/cintos/8.jpg",
      precio: "590",
      descripcion: "Cinto"
    },
    {
      codigo: "ci108",
      imagen: "../assets/accesorios/cintos/9.jpg",
      precio: "305",
      descripcion: "Cinto"
    },
    {
      codigo: "ci109",
      imagen: "../assets/accesorios/cintos/10.jpg",
      precio: "390",
      descripcion: "Cinto"
    },
    {
      codigo: "ci110",
      imagen: "../assets/accesorios/cintos/11.jpg",
      precio: "240",
      descripcion: "Cinto"
    },
    {
      codigo: "ci111",
      imagen: "../assets/accesorios/cintos/12.jpg",
      precio: "160",
      descripcion: "Cinto"
    },
    {
      codigo: "ci112",
      imagen: "../assets/accesorios/cintos/13.jpg",
      precio: "340",
      descripcion: "Cinto"
    },
    {
      codigo: "ci113",
      imagen: "../assets/accesorios/cintos/14.jpg",
      precio: "570",
      descripcion: "Cinto"
    },
    {
      codigo: "ci114",
      imagen: "../assets/accesorios/cintos/15.jpg",
      precio: "470",
      descripcion: "Cinto"
    },
    {
      codigo: "ci115",
      imagen: "../assets/accesorios/cintos/16.jpg",
      precio: "470",
      descripcion: "Cinto"
    },
  ]
  collares = [
    {
      codigo: "k100",
      imagen: "../assets/accesorios/collares/1.jpg",
      precio: "420",
      descripcion: "Collar"
    },
    {
      codigo: "k101",
      imagen: "../assets/accesorios/collares/2.jpg",
      precio: "360",
      descripcion: "Collar"
    },
    {
      codigo: "k102",
      imagen: "../assets/accesorios/collares/3.jpg",
      precio: "540",
      descripcion: "Collar"
    },
    {
      codigo: "k103",
      imagen: "../assets/accesorios/collares/4.jpg",
      precio: "540",
      descripcion: "Collar"
    },
    {
      codigo: "k104",
      imagen: "../assets/accesorios/collares/5.jpg",
      precio: "210",
      descripcion: "Chocker"
    },
    {
      codigo: "k105",
      imagen: "../assets/accesorios/collares/6.jpg",
      precio: "298",
      descripcion: "Collar"
    },
    {
      codigo: "k106",
      imagen: "../assets/accesorios/collares/7.jpg",
      precio: "298",
      descripcion: "Collar"
    },
    {
      codigo: "k107",
      imagen: "../assets/accesorios/collares/8.jpg",
      precio: "210",
      descripcion: "Chocker"
    },
    {
      codigo: "k108",
      imagen: "../assets/accesorios/collares/9.jpg",
      precio: "210",
      descripcion: "Chocker"
    },
    {
      codigo: "k109",
      imagen: "../assets/accesorios/collares/10.jpg",
      precio: "210",
      descripcion: "Chocker"
    },
    {
      codigo: "k110",
      imagen: "../assets/accesorios/collares/11.jpg",
      precio: "170",
      descripcion: "Chocker"
    },
    {
      codigo: "k111",
      imagen: "../assets/accesorios/collares/12.jpg",
      precio: "110",
      descripcion: "Chocker"
    },
    {
      codigo: "k112",
      imagen: "../assets/accesorios/collares/13.jpg",
      precio: "350",
      descripcion: "Chocker"
    },
    {
      codigo: "k113",
      imagen: "../assets/accesorios/collares/14.jpg",
      precio: "110",
      descripcion: "Chocker"
    },
    {
      codigo: "k114",
      imagen: "../assets/accesorios/collares/15.jpg",
      precio: "530",
      descripcion: "Collar"
    },
    {
      codigo: "k115",
      imagen: "../assets/accesorios/collares/16.jpg",
      precio: "160",
      descripcion: "Chocker"
    },
    {
      codigo: "k116",
      imagen: "../assets/accesorios/collares/17.jpg",
      precio: "490",
      descripcion: "Chocker"
    },
    {
      codigo: "k117",
      imagen: "../assets/accesorios/collares/18.jpg",
      precio: "410",
      descripcion: "Collar"
    },
    {
      codigo: "k118",
      imagen: "../assets/accesorios/collares/19.jpg",
      precio: "210",
      descripcion: "Collar"
    },
    {
      codigo: "k119",
      imagen: "../assets/accesorios/collares/20.jpg",
      precio: "290",
      descripcion: "Collar"
    },
    {
      codigo: "k120",
      imagen: "../assets/accesorios/collares/21.jpg",
      precio: "540",
      descripcion: "Collar"
    },
    {
      codigo: "k121",
      imagen: "../assets/accesorios/collares/22.jpg",
      precio: "450",
      descripcion: "Collar"
    },
    {
      codigo: "k122",
      imagen: "../assets/accesorios/collares/23.jpg",
      precio: "450",
      descripcion: "Collar"
    },
    {
      codigo: "k123",
      imagen: "../assets/accesorios/collares/24.jpg",
      precio: "540",
      descripcion: "Collar"
    },
    {
      codigo: "k124",
      imagen: "../assets/accesorios/collares/25.jpg",
      precio: "180",
      descripcion: "Collar"
    },
    {
      codigo: "k125",
      imagen: "../assets/accesorios/collares/26.jpg",
      precio: "900",
      descripcion: "Collar"
    },
    {
      codigo: "k126",
      imagen: "../assets/accesorios/collares/27.jpg",
      precio: "1180",
      descripcion: "Collar"
    },
    {
      codigo: "k127",
      imagen: "../assets/accesorios/collares/28.jpg",
      precio: "780",
      descripcion: "Collar"
    },
    {
      codigo: "k128",
      imagen: "../assets/accesorios/collares/29.jpg",
      precio: "550",
      descripcion: "Collar"
    },
    {
      codigo: "k129",
      imagen: "../assets/accesorios/collares/30.jpg",
      precio: "125",
      descripcion: "Chocker"
    },
    {
      codigo: "k130",
      imagen: "../assets/accesorios/collares/31.jpg",
      precio: "210",
      descripcion: "Chocker"
    },
    {
      codigo: "k131",
      imagen: "../assets/accesorios/collares/32.jpg",
      precio: "310",
      descripcion: "Collar"
    },
    {
      codigo: "k132",
      imagen: "../assets/accesorios/collares/33.jpg",
      precio: "210",
      descripcion: "Chocker"
    },
    {
      codigo: "k133",
      imagen: "../assets/accesorios/collares/34.jpg",
      precio: "110",
      descripcion: "Chocker"
    },
    {
      codigo: "k134",
      imagen: "../assets/accesorios/collares/35.jpg",
      precio: "220",
      descripcion: "Collar"
    },
    {
      codigo: "k135",
      imagen: "../assets/accesorios/collares/36.jpg",
      precio: "170",
      descripcion: "Chocker"
    },
    ]
  colitas= [
    {
      codigo: "co100",
      imagen: "../assets/accesorios/colitas/1.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co101",
      imagen: "../assets/accesorios/colitas/2.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co102",
      imagen: "../assets/accesorios/colitas/3.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co103",
      imagen: "../assets/accesorios/colitas/4.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co104",
      imagen: "../assets/accesorios/colitas/5.jpg",
      precio: "300",
      descripcion: "Colita"
    },
    {
      codigo: "co105",
      imagen: "../assets/accesorios/colitas/6.jpg",
      precio: "300",
      descripcion: "Colita"
    },
    {
      codigo: "co106",
      imagen: "../assets/accesorios/colitas/7.jpg",
      precio: "300",
      descripcion: "Colita"
    },
    {
      codigo: "co107",
      imagen: "../assets/accesorios/colitas/8.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co108",
      imagen: "../assets/accesorios/colitas/9.jpg",
      precio: "190",
      descripcion: "Colita"
    },
    {
      codigo: "co109",
      imagen: "../assets/accesorios/colitas/10.jpg",
      precio: "190",
      descripcion: "Colita"
    },
    {
      codigo: "co110",
      imagen: "../assets/accesorios/colitas/11.jpg",
      precio: "190",
      descripcion: "Colita"
    },
    {
      codigo: "co111",
      imagen: "../assets/accesorios/colitas/12.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co112",
      imagen: "../assets/accesorios/colitas/13.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co113",
      imagen: "../assets/accesorios/colitas/14.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co114",
      imagen: "../assets/accesorios/colitas/15.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co115",
      imagen: "../assets/accesorios/colitas/16.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co116",
      imagen: "../assets/accesorios/colitas/17.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co117",
      imagen: "../assets/accesorios/colitas/18.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co118",
      imagen: "../assets/accesorios/colitas/19.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co119",
      imagen: "../assets/accesorios/colitas/20.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co120",
      imagen: "../assets/accesorios/colitas/21.jpg",
      precio: "130",
      descripcion: "Colita"
    },
    {
      codigo: "co121",
      imagen: "../assets/accesorios/colitas/22.jpg",
      precio: "110",
      descripcion: "Colita"
    },
    {
      codigo: "co122",
      imagen: "../assets/accesorios/colitas/23.jpg",
      precio: "110",
      descripcion: "Colita"
    },
    {
      codigo: "co123",
      imagen: "../assets/accesorios/colitas/24.jpg",
      precio: "110",
      descripcion: "Colita"
    },
    {
      codigo: "co124",
      imagen: "../assets/accesorios/colitas/25.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co125",
      imagen: "../assets/accesorios/colitas/26.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co126",
      imagen: "../assets/accesorios/colitas/27.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co127",
      imagen: "../assets/accesorios/colitas/28.jpg",
      precio: "190",
      descripcion: "Colita"
    },
    {
      codigo: "co128",
      imagen: "../assets/accesorios/colitas/29.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co129",
      imagen: "../assets/accesorios/colitas/30.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co130",
      imagen: "../assets/accesorios/colitas/31.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co131",
      imagen: "../assets/accesorios/colitas/32.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co132",
      imagen: "../assets/accesorios/colitas/33.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co133",
      imagen: "../assets/accesorios/colitas/34.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co134",
      imagen: "../assets/accesorios/colitas/35.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co135",
      imagen: "../assets/accesorios/colitas/36.jpg",
      precio: "95",
      descripcion: "Colita"
    },
    {
      codigo: "co136",
      imagen: "../assets/accesorios/colitas/37.jpg",
      precio: "95",
      descripcion: "Colita"
    },
    {
      codigo: "co137",
      imagen: "../assets/accesorios/colitas/38.jpg",
      precio: "95",
      descripcion: "Colita"
    },
    {
      codigo: "co138",
      imagen: "../assets/accesorios/colitas/39.jpg",
      precio: "95",
      descripcion: "Colita"
    },
    {
      codigo: "co139",
      imagen: "../assets/accesorios/colitas/40.jpg",
      precio: "95",
      descripcion: "Colita"
    },
    {
      codigo: "co140",
      imagen: "../assets/accesorios/colitas/41.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co141",
      imagen: "../assets/accesorios/colitas/42.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co142",
      imagen: "../assets/accesorios/colitas/43.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co143",
      imagen: "../assets/accesorios/colitas/44.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co144",
      imagen: "../assets/accesorios/colitas/45.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co145",
      imagen: "../assets/accesorios/colitas/46.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co146",
      imagen: "../assets/accesorios/colitas/47.jpg",
      precio: "40",
      descripcion: "Colita"
    },
    {
      codigo: "co147",
      imagen: "../assets/accesorios/colitas/48.jpg",
      precio: "40",
      descripcion: "Colita"
    },
    {
      codigo: "co148",
      imagen: "../assets/accesorios/colitas/49.jpg",
      precio: "45",
      descripcion: "Colita"
    },
    {
      codigo: "co149",
      imagen: "../assets/accesorios/colitas/50.jpg",
      precio: "45",
      descripcion: "Colita"
    },
    {
      codigo: "co150",
      imagen: "../assets/accesorios/colitas/51.jpg",
      precio: "20",
      descripcion: "Colita"
    },
    {
      codigo: "co151",
      imagen: "../assets/accesorios/colitas/52.jpg",
      precio: "150",
      descripcion: "Colita"
    },
    {
      codigo: "co152",
      imagen: "../assets/accesorios/colitas/53.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co153",
      imagen: "../assets/accesorios/colitas/54.jpg",
      precio: "40",
      descripcion: "Colita"
    },
    {
      codigo: "co154",
      imagen: "../assets/accesorios/colitas/55.jpg",
      precio: "40",
      descripcion: "Colita"
    },
    {
      codigo: "co155",
      imagen: "../assets/accesorios/colitas/56.jpg",
      precio: "48",
      descripcion: "Colita"
    },
    {
      codigo: "co156",
      imagen: "../assets/accesorios/colitas/57.jpg",
      precio: "48",
      descripcion: "Colita"
    },
    {
      codigo: "co157",
      imagen: "../assets/accesorios/colitas/58.jpg",
      precio: "48",
      descripcion: "Colita"
    },
    {
      codigo: "co158",
      imagen: "../assets/accesorios/colitas/59.jpg",
      precio: "48",
      descripcion: "Colita"
    },
    {
      codigo: "co159",
      imagen: "../assets/accesorios/colitas/60.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co160",
      imagen: "../assets/accesorios/colitas/61.jpg",
      precio: "80",
      descripcion: "Colita"
    },
    {
      codigo: "co161",
      imagen: "../assets/accesorios/colitas/62.jpg",
      precio: "60",
      descripcion: "Colita"
    },
    {
      codigo: "co162",
      imagen: "../assets/accesorios/colitas/63.jpg",
      precio: "60",
      descripcion: "Colita"
    },
    {
      codigo: "co163",
      imagen: "../assets/accesorios/colitas/64.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co164",
      imagen: "../assets/accesorios/colitas/65.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co165",
      imagen: "../assets/accesorios/colitas/66.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co166",
      imagen: "../assets/accesorios/colitas/67.jpg",
      precio: "70",
      descripcion: "Colita"
    },
    {
      codigo: "co167",
      imagen: "../assets/accesorios/colitas/68.jpg",
      precio: "70",
      descripcion: "Colita"
    }

  ]
  correctores=[
    {
      codigo: "c100",
      imagen: "../assets/accesorios/correctores/1.jpg",
      precio: "410",
      descripcion: "Corrector"
    },
    {
      codigo: "c101",
      imagen: "../assets/accesorios/correctores/2.jpg",
      precio: "410",
      descripcion: "Corrector"
    },
    {
      codigo: "c102",
      imagen: "../assets/accesorios/correctores/3.jpg",
      precio: "320",
      descripcion: "Corrector"
    },
    {
      codigo: "c103",
      imagen: "../assets/accesorios/correctores/4.jpg",
      precio: "220",
      descripcion: "Corrector"
    },
    {
      codigo: "c104",
      imagen: "../assets/accesorios/correctores/5.jpg",
      precio: "220",
      descripcion: "Corrector"
    },
    {
      codigo: "c105",
      imagen: "../assets/accesorios/correctores/6.jpg",
      precio: "630",
      descripcion: "Corrector"
    },
    {
      codigo: "c106",
      imagen: "../assets/accesorios/correctores/7.jpg",
      precio: "365",
      descripcion: "Corrector"
    },
    {
      codigo: "c107",
      imagen: "../assets/accesorios/correctores/8.jpg",
      precio: "495",
      descripcion: "Corrector"
    },
  ]
  delineadores=[
    {
      codigo: "d100",
      imagen: "../assets/accesorios/delineadores/1.jpg",
      precio: "160",
      descripcion: "Delineador glitter"
    },
    {
      codigo: "d101",
      imagen: "../assets/accesorios/delineadores/2.jpg",
      precio: "160",
      descripcion: "Delineador glitter"
    },
    {
      codigo: "d102",
      imagen: "../assets/accesorios/delineadores/3.jpg",
      precio: "160",
      descripcion: "Delineador glitter"
    },
    {
      codigo: "d103",
      imagen: "../assets/accesorios/delineadores/4.jpg",
      precio: "160",
      descripcion: "Delineador glitter"
    },
    {
      codigo: "d104",
      imagen: "../assets/accesorios/delineadores/5.jpg",
      precio: "90",
      descripcion: "Lapiz delineador"
    },
    {
      codigo: "d105",
      imagen: "../assets/accesorios/delineadores/6.jpg",
      precio: "70",
      descripcion: "Delineador retráctil"
    },
    {
      codigo: "d106",
      imagen: "../assets/accesorios/delineadores/7.jpg",
      precio: "125",
      descripcion: "Delineador líq."
    },
    {
      codigo: "d107",
      imagen: "../assets/accesorios/delineadores/8.jpg",
      precio: "225",
      descripcion: "Delineador líq."
    },
    {
      codigo: "d108",
      imagen: "../assets/accesorios/delineadores/9.jpg",
      precio: "140",
      descripcion: "Delineador en gel"
    },
    {
      codigo: "d109",
      imagen: "../assets/accesorios/delineadores/10.jpg",
      precio: "220",
      descripcion: "Delineador en gel"
    },
    {
      codigo: "d110",
      imagen: "../assets/accesorios/delineadores/11.jpg",
      precio: "200",
      descripcion: "Delineador en gel"
    },
    {
      codigo: "d111",
      imagen: "../assets/accesorios/delineadores/12.jpg",
      precio: "200",
      descripcion: "Delineador en gel"
    },
  ]
  dijes=[
    {
      codigo: "di100",
      imagen: "../assets/accesorios/dijes/1.jpg",
      precio: "235",
      descripcion: "Dije"
    },
    {
      codigo: "di101",
      imagen: "../assets/accesorios/dijes/2.jpg",
      precio: "355",
      descripcion: "Dije"
    },
    {
      codigo: "di102",
      imagen: "../assets/accesorios/dijes/3.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di103",
      imagen: "../assets/accesorios/dijes/4.jpg",
      precio: "190",
      descripcion: "Dije"
    },
    {
      codigo: "di104",
      imagen: "../assets/accesorios/dijes/5.jpg",
      precio: "120",
      descripcion: "Dije"
    },
    {
      codigo: "di105",
      imagen: "../assets/accesorios/dijes/6.jpg",
      precio: "140",
      descripcion: "Dije"
    },
    {
      codigo: "di106",
      imagen: "../assets/accesorios/dijes/7.jpg",
      precio: "220",
      descripcion: "Dije"
    },
    {
      codigo: "di107",
      imagen: "../assets/accesorios/dijes/8.jpg",
      precio: "130",
      descripcion: "Dije"
    },
    {
      codigo: "di108",
      imagen: "../assets/accesorios/dijes/9.jpg",
      precio: "75",
      descripcion: "Dije"
    },
    {
      codigo: "di109",
      imagen: "../assets/accesorios/dijes/10.jpg",
      precio: "180",
      descripcion: "Dije"
    },
    {
      codigo: "di110",
      imagen: "../assets/accesorios/dijes/11.jpg",
      precio: "85",
      descripcion: "Dije"
    },
    {
      codigo: "di111",
      imagen: "../assets/accesorios/dijes/12.jpg",
      precio: "195",
      descripcion: "Dije"
    },
    {
      codigo: "di112",
      imagen: "../assets/accesorios/dijes/13.jpg",
      precio: "95",
      descripcion: "Dije"
    },
    {
      codigo: "di113",
      imagen: "../assets/accesorios/dijes/14.jpg",
      precio: "95",
      descripcion: "Dije"
    },
    {
      codigo: "di114",
      imagen: "../assets/accesorios/dijes/15.jpg",
      precio: "135",
      descripcion: "Dije"
    },
    {
      codigo: "di115",
      imagen: "../assets/accesorios/dijes/16.jpg",
      precio: "65",
      descripcion: "Dije"
    },
    {
      codigo: "di116",
      imagen: "../assets/accesorios/dijes/17.jpg",
      precio: "135",
      descripcion: "Dije"
    },
    {
      codigo: "di117",
      imagen: "../assets/accesorios/dijes/18.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di118",
      imagen: "../assets/accesorios/dijes/19.jpg",
      precio: "50",
      descripcion: "Dije"
    },
    {
      codigo: "di119",
      imagen: "../assets/accesorios/dijes/20.jpg",
      precio: "65",
      descripcion: "Dije"
    },
    {
      codigo: "di120",
      imagen: "../assets/accesorios/dijes/21.jpg",
      precio: "65",
      descripcion: "Dije"
    },
    {
      codigo: "di121",
      imagen: "../assets/accesorios/dijes/22.jpg",
      precio: "160",
      descripcion: "Dije"
    },
    {
      codigo: "di122",
      imagen: "../assets/accesorios/dijes/23.jpg",
      precio: "195",
      descripcion: "Dije"
    },
    {
      codigo: "di123",
      imagen: "../assets/accesorios/dijes/24.jpg",
      precio: "210",
      descripcion: "Dije"
    },
    {
      codigo: "di124",
      imagen: "../assets/accesorios/dijes/25.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di125",
      imagen: "../assets/accesorios/dijes/26.jpg",
      precio: "180",
      descripcion: "Dije"
    },
    {
      codigo: "di126",
      imagen: "../assets/accesorios/dijes/27.jpg",
      precio: "325",
      descripcion: "Dije"
    },
    {
      codigo: "di127",
      imagen: "../assets/accesorios/dijes/28.jpg",
      precio: "180",
      descripcion: "Dije"
    },
    {
      codigo: "di128",
      imagen: "../assets/accesorios/dijes/29.jpg",
      precio: "95",
      descripcion: "Dije"
    },
    {
      codigo: "di129",
      imagen: "../assets/accesorios/dijes/30.jpg",
      precio: "95",
      descripcion: "Dije"
    },
    {
      codigo: "di130",
      imagen: "../assets/accesorios/dijes/31.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di131",
      imagen: "../assets/accesorios/dijes/32.jpg",
      precio: "180",
      descripcion: "Dije"
    },
    {
      codigo: "di132",
      imagen: "../assets/accesorios/dijes/33.jpg",
      precio: "285",
      descripcion: "Dije"
    },
    {
      codigo: "di133",
      imagen: "../assets/accesorios/dijes/34.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di134",
      imagen: "../assets/accesorios/dijes/35.jpg",
      precio: "110",
      descripcion: "Dije"
    },
    {
      codigo: "di135",
      imagen: "../assets/accesorios/dijes/36.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di136",
      imagen: "../assets/accesorios/dijes/37.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di137",
      imagen: "../assets/accesorios/dijes/38.jpg",
      precio: "70",
      descripcion: "Dije"
    },
    {
      codigo: "di138",
      imagen: "../assets/accesorios/dijes/39.jpg",
      precio: "85",
      descripcion: "Dije"
    },
    {
      codigo: "di139",
      imagen: "../assets/accesorios/dijes/40.jpg",
      precio: "95",
      descripcion: "Dije"
    },
    {
      codigo: "di140",
      imagen: "../assets/accesorios/dijes/41.jpg",
      precio: "50",
      descripcion: "Dije"
    },
    {
      codigo: "di141",
      imagen: "../assets/accesorios/dijes/42.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di142",
      imagen: "../assets/accesorios/dijes/43.jpg",
      precio: "145",
      descripcion: "Dije"
    },
    {
      codigo: "di143",
      imagen: "../assets/accesorios/dijes/44.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di144",
      imagen: "../assets/accesorios/dijes/45.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di145",
      imagen: "../assets/accesorios/dijes/46.jpg",
      precio: "140",
      descripcion: "Dije"
    },
    {
      codigo: "di146",
      imagen: "../assets/accesorios/dijes/47.jpg",
      precio: "80",
      descripcion: "Dije"
    },
    {
      codigo: "di147",
      imagen: "../assets/accesorios/dijes/48.jpg",
      precio: "50",
      descripcion: "Dije"
    },
    {
      codigo: "di148",
      imagen: "../assets/accesorios/dijes/49.jpg",
      precio: "198",
      descripcion: "Dije"
    },
    {
      codigo: "di149",
      imagen: "../assets/accesorios/dijes/50.jpg",
      precio: "198",
      descripcion: "Dije"
    },
    {
      codigo: "di150",
      imagen: "../assets/accesorios/dijes/51.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di151",
      imagen: "../assets/accesorios/dijes/52.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di152",
      imagen: "../assets/accesorios/dijes/53.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di153",
      imagen: "../assets/accesorios/dijes/54.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di154",
      imagen: "../assets/accesorios/dijes/55.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di155",
      imagen: "../assets/accesorios/dijes/56.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di156",
      imagen: "../assets/accesorios/dijes/57.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di157",
      imagen: "../assets/accesorios/dijes/58.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di158",
      imagen: "../assets/accesorios/dijes/59.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di159",
      imagen: "../assets/accesorios/dijes/60.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di160",
      imagen: "../assets/accesorios/dijes/61.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di161",
      imagen: "../assets/accesorios/dijes/62.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di162",
      imagen: "../assets/accesorios/dijes/63.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di163",
      imagen: "../assets/accesorios/dijes/64.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di164",
      imagen: "../assets/accesorios/dijes/65.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di165",
      imagen: "../assets/accesorios/dijes/66.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di166",
      imagen: "../assets/accesorios/dijes/67.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di167",
      imagen: "../assets/accesorios/dijes/68.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di168",
      imagen: "../assets/accesorios/dijes/69.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di169",
      imagen: "../assets/accesorios/dijes/70.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di170",
      imagen: "../assets/accesorios/dijes/71.jpg",
      precio: "90",
      descripcion: "Dije"
    },
    {
      codigo: "di171",
      imagen: "../assets/accesorios/dijes/72.jpg",
      precio: "90",
      descripcion: "Dije"
    },
  ]
  esmaltes=[
    {
      codigo: "e100",
      imagen: "../assets/accesorios/esmaltes/1.jpg",
      precio: "360",
      descripcion: "Set para Francesitas"
    },
    {
      codigo: "e101",
      imagen: "../assets/accesorios/esmaltes/2.jpg",
      precio: "190",
      descripcion: "Ablanda Cutículas"
    },
    {
      codigo: "e102",
      imagen: "../assets/accesorios/esmaltes/3.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e103",
      imagen: "../assets/accesorios/esmaltes/4.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e104",
      imagen: "../assets/accesorios/esmaltes/5.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e105",
      imagen: "../assets/accesorios/esmaltes/6.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e106",
      imagen: "../assets/accesorios/esmaltes/7.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e107",
      imagen: "../assets/accesorios/esmaltes/8.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e108",
      imagen: "../assets/accesorios/esmaltes/9.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e109",
      imagen: "../assets/accesorios/esmaltes/10.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e110",
      imagen: "../assets/accesorios/esmaltes/11.jpg",
      precio: "365",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e111",
      imagen: "../assets/accesorios/esmaltes/12.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e112",
      imagen: "../assets/accesorios/esmaltes/13.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e113",
      imagen: "../assets/accesorios/esmaltes/14.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e114",
      imagen: "../assets/accesorios/esmaltes/15.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e115",
      imagen: "../assets/accesorios/esmaltes/16.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e116",
      imagen: "../assets/accesorios/esmaltes/17.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e117",
      imagen: "../assets/accesorios/esmaltes/18.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e118",
      imagen: "../assets/accesorios/esmaltes/19.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e119",
      imagen: "../assets/accesorios/esmaltes/20.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e120",
      imagen: "../assets/accesorios/esmaltes/21.jpg",
      precio: "320",
      descripcion: "Esmalte UV&LED"
    },
    {
      codigo: "e121",
      imagen: "../assets/accesorios/esmaltes/22.jpg",
      precio: "150",
      descripcion: "Secado rápido"
    },
    {
      codigo: "e122",
      imagen: "../assets/accesorios/esmaltes/23.jpg",
      precio: "180",
      descripcion: "Esmalte stamping"
    },
    {
      codigo: "e123",
      imagen: "../assets/accesorios/esmaltes/24.jpg",
      precio: "180",
      descripcion: "Esmalte stamping"
    },
    {
      codigo: "e124",
      imagen: "../assets/accesorios/esmaltes/25.jpg",
      precio: "240",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e125",
      imagen: "../assets/accesorios/esmaltes/26.jpg",
      precio: "240",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e126",
      imagen: "../assets/accesorios/esmaltes/27.jpg",
      precio: "235",
      descripcion: "Esmalte metal"
    },
    {
      codigo: "e127",
      imagen: "../assets/accesorios/esmaltes/28.jpg",
      precio: "235",
      descripcion: "Esmalte metal"
    },
    {
      codigo: "e128",
      imagen: "../assets/accesorios/esmaltes/29.jpg",
      precio: "180",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e129",
      imagen: "../assets/accesorios/esmaltes/30.jpg",
      precio: "180",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e130",
      imagen: "../assets/accesorios/esmaltes/31.jpg",
      precio: "180",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e131",
      imagen: "../assets/accesorios/esmaltes/32.jpg",
      precio: "198",
      descripcion: "Esmalte gel"
    },
    {
      codigo: "e132",
      imagen: "../assets/accesorios/esmaltes/33.jpg",
      precio: "198",
      descripcion: "Esmalte gel"
    },
    {
      codigo: "e133",
      imagen: "../assets/accesorios/esmaltes/34.jpg",
      precio: "255",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e134",
      imagen: "../assets/accesorios/esmaltes/35.jpg",
      precio: "255",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e135",
      imagen: "../assets/accesorios/esmaltes/36.jpg",
      precio: "255",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e136",
      imagen: "../assets/accesorios/esmaltes/37.jpg",
      precio: "255",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e137",
      imagen: "../assets/accesorios/esmaltes/38.jpg",
      precio: "255",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e138",
      imagen: "../assets/accesorios/esmaltes/39.jpg",
      precio: "255",
      descripcion: "Esmalte espejado"
    },
    {
      codigo: "e139",
      imagen: "../assets/accesorios/esmaltes/40.jpg",
      precio: "220",
      descripcion: "Esmalte brilloso"
    },
    {
      codigo: "e140",
      imagen: "../assets/accesorios/esmaltes/41.jpg",
      precio: "220",
      descripcion: "Esmalte brilloso"
    },
    {
      codigo: "e141",
      imagen: "../assets/accesorios/esmaltes/42.jpg",
      precio: "180",
      descripcion: "Esmalte celeste"
    },
    {
      codigo: "e142",
      imagen: "../assets/accesorios/esmaltes/43.jpg",
      precio: "180",
      descripcion: "Esmalte coral"
    },
    {
      codigo: "e143",
      imagen: "../assets/accesorios/esmaltes/44.jpg",
      precio: "180",
      descripcion: "Esmalte gris"
    },
    {
      codigo: "e144",
      imagen: "../assets/accesorios/esmaltes/45.jpg",
      precio: "180",
      descripcion: "Esmalte rojo"
    },
    {
      codigo: "e145",
      imagen: "../assets/accesorios/esmaltes/46.jpg",
      precio: "180",
      descripcion: "Esmalte rosa"
    },
    {
      codigo: "e146",
      imagen: "../assets/accesorios/esmaltes/47.jpg",
      precio: "180",
      descripcion: "Esmalte rosa"
    },
    {
      codigo: "e147",
      imagen: "../assets/accesorios/esmaltes/48.jpg",
      precio: "180",
      descripcion: "Esmalte rojo"
    },
    {
      codigo: "e148",
      imagen: "../assets/accesorios/esmaltes/49.jpg",
      precio: "180",
      descripcion: "Esmalte salmón"
    },
    {
      codigo: "e149",
      imagen: "../assets/accesorios/esmaltes/50.jpg",
      precio: "180",
      descripcion: "Esmalte rosa"
    },
    {
      codigo: "e150",
      imagen: "../assets/accesorios/esmaltes/51.jpg",
      precio: "220",
      descripcion: "Esmalte brilloso"
    },
    {
      codigo: "e151",
      imagen: "../assets/accesorios/esmaltes/52.jpg",
      precio: "220",
      descripcion: "Esmalte brilloso"
    },
  ]
  gorras=[
    {
      codigo: "g100",
      imagen: "../assets/accesorios/gorras/1.jpg",
      precio: "480",
      descripcion: "Gorra"
    },
    {
      codigo: "g101",
      imagen: "../assets/accesorios/gorras/2.jpg",
      precio: "480",
      descripcion: "Gorra"
    },
    {
      codigo: "g102",
      imagen: "../assets/accesorios/gorras/3.jpg",
      precio: "470",
      descripcion: "Gorra"
    },
    {
      codigo: "g103",
      imagen: "../assets/accesorios/gorras/4.jpg",
      precio: "570",
      descripcion: "Gorra"
    },
    {
      codigo: "g104",
      imagen: "../assets/accesorios/gorras/5.jpg",
      precio: "570",
      descripcion: "Gorra"
    },
    {
      codigo: "g105",
      imagen: "../assets/accesorios/gorras/6.jpg",
      precio: "470",
      descripcion: "Gorra"
    },
    {
      codigo: "g106",
      imagen: "../assets/accesorios/gorras/7.jpg",
      precio: "470",
      descripcion: "Gorra"
    },
    {
      codigo: "g107",
      imagen: "../assets/accesorios/gorras/8.jpg",
      precio: "470",
      descripcion: "Gorra"
    },
    {
      codigo: "g108",
      imagen: "../assets/accesorios/gorras/9.jpg",
      precio: "470",
      descripcion: "Gorra"
    },
    {
      codigo: "g109",
      imagen: "../assets/accesorios/gorras/10.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g110",
      imagen: "../assets/accesorios/gorras/11.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g111",
      imagen: "../assets/accesorios/gorras/12.jpg",
      precio: "380",
      descripcion: "Gorra"
    },
    {
      codigo: "g112",
      imagen: "../assets/accesorios/gorras/13.jpg",
      precio: "250",
      descripcion: "Gorra"
    },
    {
      codigo: "g113",
      imagen: "../assets/accesorios/gorras/14.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g114",
      imagen: "../assets/accesorios/gorras/15.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g115",
      imagen: "../assets/accesorios/gorras/16.jpg",
      precio: "",
      descripcion: "Gorra"
    },
    {
      codigo: "g116",
      imagen: "../assets/accesorios/gorras/17.jpg",
      precio: "385",
      descripcion: "Gorra"
    },
    {
      codigo: "g117",
      imagen: "../assets/accesorios/gorras/18.jpg",
      precio: "385",
      descripcion: "Gorra"
    },
    {
      codigo: "g118",
      imagen: "../assets/accesorios/gorras/19.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g119",
      imagen: "../assets/accesorios/gorras/20.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g120",
      imagen: "../assets/accesorios/gorras/21.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g121",
      imagen: "../assets/accesorios/gorras/22.jpg",
      precio: "430",
      descripcion: "Gorra"
    },
    {
      codigo: "g122",
      imagen: "../assets/accesorios/gorras/23.jpg",
      precio: "295",
      descripcion: "Gorra"
    },
    {
      codigo: "g123",
      imagen: "../assets/accesorios/gorras/24.jpg",
      precio: "320",
      descripcion: "Gorra"
    },
    {
      codigo: "g124",
      imagen: "../assets/accesorios/gorras/25.jpg",
      precio: "325",
      descripcion: "Gorra"
    },
    {
      codigo: "g125",
      imagen: "../assets/accesorios/gorras/26.jpg",
      precio: "320",
      descripcion: "Gorra"
    },
    {
      codigo: "g126",
      imagen: "../assets/accesorios/gorras/27.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g127",
      imagen: "../assets/accesorios/gorras/28.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g128",
      imagen: "../assets/accesorios/gorras/29.jpg",
      precio: "330",
      descripcion: "Gorra"
    },
    {
      codigo: "g129",
      imagen: "../assets/accesorios/gorras/30.jpg",
      precio: "320",
      descripcion: "Gorra"
    },
    {
      codigo: "g130",
      imagen: "../assets/accesorios/gorras/31.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g131",
      imagen: "../assets/accesorios/gorras/32.jpg",
      precio: "350",
      descripcion: "Gorra"
    },
    {
      codigo: "g132",
      imagen: "../assets/accesorios/gorras/33.jpg",
      precio: "295",
      descripcion: "Gorra"
    },
    {
      codigo: "g133",
      imagen: "../assets/accesorios/gorras/34.jpg",
      precio: "295",
      descripcion: "Gorra"
    },
    {
      codigo: "g134",
      imagen: "../assets/accesorios/gorras/35.jpg",
      precio: "295",
      descripcion: "Gorra"
    },
    {
      codigo: "g135",
      imagen: "../assets/accesorios/gorras/36.jpg",
      precio: "420",
      descripcion: "Gorra"
    }
  ]
  iluminadores=[
    {
      codigo: "i100",
      imagen: "../assets/accesorios/iluminadores/1.jpg",
      precio: "450",
      descripcion: "Iluminador"
    },
    {
      codigo: "i101",
      imagen: "../assets/accesorios/iluminadores/2.jpg",
      precio: "450",
      descripcion: "Iluminador"
    },
    {
      codigo: "i102",
      imagen: "../assets/accesorios/iluminadores/3.jpg",
      precio: "450",
      descripcion: "Iluminador"
    },
    {
      codigo: "i103",
      imagen: "../assets/accesorios/iluminadores/4.jpg",
      precio: "430",
      descripcion: "Iluminador"
    },
    {
      codigo: "i104",
      imagen: "../assets/accesorios/iluminadores/5.jpg",
      precio: "430",
      descripcion: "Iluminador"
    },
    {
      codigo: "i105",
      imagen: "../assets/accesorios/iluminadores/6.jpg",
      precio: "420",
      descripcion: "Iluminador"
    },
    {
      codigo: "i106",
      imagen: "../assets/accesorios/iluminadores/7.jpg",
      precio: "420",
      descripcion: "Iluminador"
    },
    {
      codigo: "i107",
      imagen: "../assets/accesorios/iluminadores/8.jpg",
      precio: "410",
      descripcion: "Iluminador"
    },
  ]
  labiales=[
    {
      codigo: "l100",
      imagen: "../assets/accesorios/labiales/1.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l101",
      imagen: "../assets/accesorios/labiales/2.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l102",
      imagen: "../assets/accesorios/labiales/3.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l103",
      imagen: "../assets/accesorios/labiales/4.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l104",
      imagen: "../assets/accesorios/labiales/5.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l105",
      imagen: "../assets/accesorios/labiales/6.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l106",
      imagen: "../assets/accesorios/labiales/7.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l107",
      imagen: "../assets/accesorios/labiales/8.jpg",
      precio: "215",
      descripcion: "Labial"
    },
    {
      codigo: "l108",
      imagen: "../assets/accesorios/labiales/9.jpg",
      precio: "195",
      descripcion: "Glitter"
    },
    {
      codigo: "l109",
      imagen: "../assets/accesorios/labiales/10.jpg",
      precio: "195",
      descripcion: "Glitter"
    },
    {
      codigo: "l110",
      imagen: "../assets/accesorios/labiales/11.jpg",
      precio: "195",
      descripcion: "Glitter"
    },
    {
      codigo: "l111",
      imagen: "../assets/accesorios/labiales/12.jpg",
      precio: "195",
      descripcion: "Glitter"
    },
    {
      codigo: "l112",
      imagen: "../assets/accesorios/labiales/13.jpg",
      precio: "160",
      descripcion: "Labial"
    },
    {
      codigo: "l113",
      imagen: "../assets/accesorios/labiales/14.jpg",
      precio: "160",
      descripcion: "Labial"
    },
    {
      codigo: "l114",
      imagen: "../assets/accesorios/labiales/15.jpg",
      precio: "160",
      descripcion: "Labial"
    },
    {
      codigo: "l115",
      imagen: "../assets/accesorios/labiales/16.jpg",
      precio: "160",
      descripcion: "Labial"
    },
    {
      codigo: "l116",
      imagen: "../assets/accesorios/labiales/17.jpg",
      precio: "160",
      descripcion: "Labial"
    },
    {
      codigo: "l117",
      imagen: "../assets/accesorios/labiales/18.jpg",
      precio: "195",
      descripcion: "Labial"
    },
    {
      codigo: "l118",
      imagen: "../assets/accesorios/labiales/19.jpg",
      precio: "195",
      descripcion: "Labial"
    },
    {
      codigo: "l119",
      imagen: "../assets/accesorios/labiales/20.jpg",
      precio: "265",
      descripcion: "Labial"
    },
  ]
  mochilas=[
    {
      codigo: "m100",
      imagen: "../assets/accesorios/mochilas/1.jpg",
      precio: "1320",
      descripcion: "Mochila"
    },
    {
      codigo: "m101",
      imagen: "../assets/accesorios/mochilas/2.jpg",
      precio: "610",
      descripcion: "Mochila"
    },
    {
      codigo: "m102",
      imagen: "../assets/accesorios/mochilas/3.jpg",
      precio: "610",
      descripcion: "Mochila"
    },
    {
      codigo: "m103",
      imagen: "../assets/accesorios/mochilas/4.jpg",
      precio: "610",
      descripcion: "Mochila"
    },
    {
      codigo: "m104",
      imagen: "../assets/accesorios/mochilas/5.jpg",
      precio: "",
      descripcion: "Mochila"
    },
    {
      codigo: "m105",
      imagen: "../assets/accesorios/mochilas/6.jpg",
      precio: "1900",
      descripcion: "Mochila"
    },
    {
      codigo: "m106",
      imagen: "../assets/accesorios/mochilas/7.jpg",
      precio: "2380",
      descripcion: "Mochila"
    },
    {
      codigo: "m107",
      imagen: "../assets/accesorios/mochilas/8.jpg",
      precio: "1700",
      descripcion: "Mochila"
    },
    {
      codigo: "m108",
      imagen: "../assets/accesorios/mochilas/9.jpg",
      precio: "1320",
      descripcion: "Mochila"
    },
    {
      codigo: "m109",
      imagen: "../assets/accesorios/mochilas/10.jpg",
      precio: "1980",
      descripcion: "Mochila"
    },
    {
      codigo: "m110",
      imagen: "../assets/accesorios/mochilas/11.jpg",
      precio: "1584",
      descripcion: "Mochila"
    },
    {
      codigo: "m111",
      imagen: "../assets/accesorios/mochilas/12.jpg",
      precio: "1700",
      descripcion: "Mochila"
    },
  ]
  necesers=[
    {
      codigo: "n100",
      imagen: "../assets/accesorios/necesers/1.jpg",
      precio: "695",
      descripcion: "Neceser"
    },
    {
      codigo: "n101",
      imagen: "../assets/accesorios/necesers/2.jpg",
      precio: "720",
      descripcion: "Neceser"
    },
    {
      codigo: "n102",
      imagen: "../assets/accesorios/necesers/3.jpg",
      precio: "900",
      descripcion: "Neceser"
    },
    {
      codigo: "n103",
      imagen: "../assets/accesorios/necesers/4.jpg",
      precio: "780",
      descripcion: "Neceser"
    },
    {
      codigo: "n104",
      imagen: "../assets/accesorios/necesers/5.jpg",
      precio: "665",
      descripcion: "Neceser"
    },
    {
      codigo: "n105",
      imagen: "../assets/accesorios/necesers/6.jpg",
      precio: "525",
      descripcion: "Neceser"
    },
    {
      codigo: "n106",
      imagen: "../assets/accesorios/necesers/7.jpg",
      precio: "790",
      descripcion: "Neceser"
    },
    {
      codigo: "n107",
      imagen: "../assets/accesorios/necesers/8.jpg",
      precio: "490",
      descripcion: "Neceser"
    },
    {
      codigo: "n108",
      imagen: "../assets/accesorios/necesers/9.jpg",
      precio: "490",
      descripcion: "Neceser"
    },
    {
      codigo: "n109",
      imagen: "../assets/accesorios/necesers/10.jpg",
      precio: "1200",
      descripcion: "Neceser"
    },
    {
      codigo: "n110",
      imagen: "../assets/accesorios/necesers/11.jpg",
      precio: "670",
      descripcion: "Neceser"
    },
    {
      codigo: "n111",
      imagen: "../assets/accesorios/necesers/12.jpg",
      precio: "720",
      descripcion: "Neceser"
    },
    {
      codigo: "n112",
      imagen: "../assets/accesorios/necesers/13.jpg",
      precio: "1200",
      descripcion: "Neceser"
    },
    {
      codigo: "n113",
      imagen: "../assets/accesorios/necesers/14.jpg",
      precio: "1300",
      descripcion: "Neceser"
    },
    {
      codigo: "n114",
      imagen: "../assets/accesorios/necesers/15.jpg",
      precio: "670",
      descripcion: "Neceser"
    },
    {
      codigo: "n115",
      imagen: "../assets/accesorios/necesers/16.jpg",
      precio: "780",
      descripcion: "Neceser"
    },
  ]
  pinceles=[
    {
      codigo: "pe100",
      imagen: "../assets/accesorios/pinceles/1.jpg",
      precio: "430",
      descripcion: "Set"
    },
    {
      codigo: "pe101",
      imagen: "../assets/accesorios/pinceles/2.jpg",
      precio: "430",
      descripcion: "Set"
    },
    {
      codigo: "pe102",
      imagen: "../assets/accesorios/pinceles/3.jpg",
      precio: "430",
      descripcion: "Set"
    },
    {
      codigo: "pe103",
      imagen: "../assets/accesorios/pinceles/4.jpg",
      precio: "280",
      descripcion: "Brocha"
    },
    {
      codigo: "pe104",
      imagen: "../assets/accesorios/pinceles/5.jpg",
      precio: "160",
      descripcion: "Brocha"
    },
    {
      codigo: "pe105",
      imagen: "../assets/accesorios/pinceles/6.jpg",
      precio: "145",
      descripcion: "Brocha"
    },
    {
      codigo: "pe106",
      imagen: "../assets/accesorios/pinceles/7.jpg",
      precio: "350",
      descripcion: "Brocha"
    },
    {
      codigo: "pe107",
      imagen: "../assets/accesorios/pinceles/8.jpg",
      precio: "160",
      descripcion: "Brocha"
    },
    {
      codigo: "pe108",
      imagen: "../assets/accesorios/pinceles/9.jpg",
      precio: "260",
      descripcion: "Brocha"
    },
    {
      codigo: "pe109",
      imagen: "../assets/accesorios/pinceles/10.jpg",
      precio: "185",
      descripcion: "Brocha"
    },
    {
      codigo: "pe110",
      imagen: "../assets/accesorios/pinceles/11.jpg",
      precio: "185",
      descripcion: "Brocha"
    },
    {
      codigo: "pe111",
      imagen: "../assets/accesorios/pinceles/12.jpg",
      precio: "185",
      descripcion: "Brocha"
    },
    {
      codigo: "pe112",
      imagen: "../assets/accesorios/pinceles/13.jpg",
      precio: "125",
      descripcion: "Limpia B"
    },
    {
      codigo: "pe113",
      imagen: "../assets/accesorios/pinceles/14.jpg",
      precio: "140",
      descripcion: "Esponja"
    },
    {
      codigo: "pe114",
      imagen: "../assets/accesorios/pinceles/15.jpg",
      precio: "145",
      descripcion: "Esponja"
    },
    {
      codigo: "pe115",
      imagen: "../assets/accesorios/pinceles/16.jpg",
      precio: "145",
      descripcion: "Esponja"
    },
  ]
  pulseras=[
    {
      codigo: "pu100",
      imagen: "../assets/accesorios/pulseras/1.jpg",
      precio: "270",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu101",
      imagen: "../assets/accesorios/pulseras/2.jpg",
      precio: "145",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu102",
      imagen: "../assets/accesorios/pulseras/3.jpg",
      precio: "130",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu103",
      imagen: "../assets/accesorios/pulseras/4.jpg",
      precio: "230",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu104",
      imagen: "../assets/accesorios/pulseras/5.jpg",
      precio: "145",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu105",
      imagen: "../assets/accesorios/pulseras/6.jpg",
      precio: "340",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu106",
      imagen: "../assets/accesorios/pulseras/7.jpg",
      precio: "190",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu107",
      imagen: "../assets/accesorios/pulseras/8.jpg",
      precio: "190",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu108",
      imagen: "../assets/accesorios/pulseras/9.jpg",
      precio: "140",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu109",
      imagen: "../assets/accesorios/pulseras/10.jpg",
      precio: "240",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu110",
      imagen: "../assets/accesorios/pulseras/11.jpg",
      precio: "300",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu111",
      imagen: "../assets/accesorios/pulseras/12.jpg",
      precio: "290",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu112",
      imagen: "../assets/accesorios/pulseras/13.jpg",
      precio: "240",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu113",
      imagen: "../assets/accesorios/pulseras/14.jpg",
      precio: "160",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu114",
      imagen: "../assets/accesorios/pulseras/15.jpg",
      precio: "130",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu115",
      imagen: "../assets/accesorios/pulseras/16.jpg",
      precio: "340",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu116",
      imagen: "../assets/accesorios/pulseras/17.jpg",
      precio: "310",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu117",
      imagen: "../assets/accesorios/pulseras/18.jpg",
      precio: "310",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu118",
      imagen: "../assets/accesorios/pulseras/19.jpg",
      precio: "98",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu119",
      imagen: "../assets/accesorios/pulseras/20.jpg",
      precio: "120",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu120",
      imagen: "../assets/accesorios/pulseras/21.jpg",
      precio: "145",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu121",
      imagen: "../assets/accesorios/pulseras/22.jpg",
      precio: "140",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu122",
      imagen: "../assets/accesorios/pulseras/23.jpg",
      precio: "150",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu123",
      imagen: "../assets/accesorios/pulseras/24.jpg",
      precio: "145",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu124",
      imagen: "../assets/accesorios/pulseras/25.jpg",
      precio: "410",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu125",
      imagen: "../assets/accesorios/pulseras/26.jpg",
      precio: "180",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu126",
      imagen: "../assets/accesorios/pulseras/27.jpg",
      precio: "280",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu127",
      imagen: "../assets/accesorios/pulseras/28.jpg",
      precio: "",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu128",
      imagen: "../assets/accesorios/pulseras/29.jpg",
      precio: "145",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu129",
      imagen: "../assets/accesorios/pulseras/30.jpg",
      precio: "150",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu130",
      imagen: "../assets/accesorios/pulseras/31.jpg",
      precio: "150",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu131",
      imagen: "../assets/accesorios/pulseras/32.jpg",
      precio: "160",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu132",
      imagen: "../assets/accesorios/pulseras/33.jpg",
      precio: "120",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu133",
      imagen: "../assets/accesorios/pulseras/34.jpg",
      precio: "150",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu134",
      imagen: "../assets/accesorios/pulseras/35.jpg",
      precio: "190",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu135",
      imagen: "../assets/accesorios/pulseras/36.jpg",
      precio: "520",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu136",
      imagen: "../assets/accesorios/pulseras/37.jpg",
      precio: "460",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu137",
      imagen: "../assets/accesorios/pulseras/38.jpg",
      precio: "",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu138",
      imagen: "../assets/accesorios/pulseras/39.jpg",
      precio: "140",
      descripcion: "Pulsera"
    },
    {
      codigo: "pu139",
      imagen: "../assets/accesorios/pulseras/40.jpg",
      precio: "185",
      descripcion: "Pulsera"
    }
  ]
  relojes=[
    {
      codigo: "r100",
      imagen: "../assets/accesorios/relojes/1.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r101",
      imagen: "../assets/accesorios/relojes/2.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r102",
      imagen: "../assets/accesorios/relojes/3.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r103",
      imagen: "../assets/accesorios/relojes/4.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r104",
      imagen: "../assets/accesorios/relojes/5.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r105",
      imagen: "../assets/accesorios/relojes/6.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r106",
      imagen: "../assets/accesorios/relojes/7.jpg",
      precio: "450",
      descripcion: "Reloj"
    },
    {
      codigo: "r107",
      imagen: "../assets/accesorios/relojes/8.jpg",
      precio: "350",
      descripcion: "Reloj"
    },
    {
      codigo: "r108",
      imagen: "../assets/accesorios/relojes/9.jpg",
      precio: "350",
      descripcion: "Reloj"
    },
    {
      codigo: "r109",
      imagen: "../assets/accesorios/relojes/10.jpg",
      precio: "350",
      descripcion: "Reloj"
    },
    {
      codigo: "r110",
      imagen: "../assets/accesorios/relojes/11.jpg",
      precio: "350",
      descripcion: "Reloj"
    },
    {
      codigo: "r111",
      imagen: "../assets/accesorios/relojes/12.jpg",
      precio: "350",
      descripcion: "Reloj"
    },
    {
      codigo: "r112",
      imagen: "../assets/accesorios/relojes/13.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r113",
      imagen: "../assets/accesorios/relojes/14.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r114",
      imagen: "../assets/accesorios/relojes/15.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r115",
      imagen: "../assets/accesorios/relojes/16.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r116",
      imagen: "../assets/accesorios/relojes/17.jpg",
      precio: "530",
      descripcion: "Reloj"
    },
    {
      codigo: "r117",
      imagen: "../assets/accesorios/relojes/18.mp4",
      precio: "350",
      descripcion: "Reloj"
    },
    {
      codigo: "r118",
      imagen: "../assets/accesorios/relojes/19.jpg",
      precio: "630",
      descripcion: "Reloj"
    },
    {
      codigo: "r119",
      imagen: "../assets/accesorios/relojes/20.jpg",
      precio: "480",
      descripcion: "Reloj"
    },
    {
      codigo: "r120",
      imagen: "../assets/accesorios/relojes/21.jpg",
      precio: "630",
      descripcion: "Reloj"
    },
    {
      codigo: "r121",
      imagen: "../assets/accesorios/relojes/22.jpg",
      precio: "230",
      descripcion: "Reloj"
    },
    {
      codigo: "r122",
      imagen: "../assets/accesorios/relojes/23.jpg",
      precio: "330",
      descripcion: "Reloj"
    },
    {
      codigo: "r123",
      imagen: "../assets/accesorios/relojes/24.jpg",
      precio: "470",
      descripcion: "Reloj"
    },
    {
      codigo: "r124",
      imagen: "../assets/accesorios/relojes/25.jpg",
      precio: "480",
      descripcion: "Reloj"
    },
    {
      codigo: "r125",
      imagen: "../assets/accesorios/relojes/26.jpg",
      precio: "480",
      descripcion: "Reloj"
    },
    {
      codigo: "r126",
      imagen: "../assets/accesorios/relojes/27.jpg",
      precio: "460",
      descripcion: "Reloj"
    },
    {
      codigo: "r127",
      imagen: "../assets/accesorios/relojes/28.jpg",
      precio: "480",
      descripcion: "Reloj"
    },
    {
      codigo: "r128",
      imagen: "../assets/accesorios/relojes/29.jpg",
      precio: "460",
      descripcion: "Reloj"
    },
    {
      codigo: "r129",
      imagen: "../assets/accesorios/relojes/30.jpg",
      precio: "460",
      descripcion: "Reloj"
    },
    {
      codigo: "r130",
      imagen: "../assets/accesorios/relojes/31.jpg",
      precio: "440",
      descripcion: "Reloj"
    },
    {
      codigo: "r131",
      imagen: "../assets/accesorios/relojes/32.jpg",
      precio: "450",
      descripcion: "Reloj"
    },
  ]
  riñoneras=[
    {
      codigo: "ri100",
      imagen: "../assets/accesorios/riñoneras/1.jpg",
      precio: "660",
      descripcion: "Riñonera"
    },
    {
      codigo: "ri101",
      imagen: "../assets/accesorios/riñoneras/2.jpg",
      precio: "660",
      descripcion: "Riñonera"
    },
    {
      codigo: "ri102",
      imagen: "../assets/accesorios/riñoneras/3.jpg",
      precio: "580",
      descripcion: "Riñonera"
    },
    {
      codigo: "ri103",
      imagen: "../assets/accesorios/riñoneras/4.jpg",
      precio: "880",
      descripcion: "Riñonera"
    },
  ]
  sobres=[
    {
      codigo: "s100",
      imagen: "../assets/accesorios/sobres/1.jpg",
      precio: "640",
      descripcion: "Sobre"
    },
    {
      codigo: "s101",
      imagen: "../assets/accesorios/sobres/2.jpg",
      precio: "690",
      descripcion: "Sobre"
    },
    {
      codigo: "s102",
      imagen: "../assets/accesorios/sobres/3.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s103",
      imagen: "../assets/accesorios/sobres/4.jpg",
      precio: "720",
      descripcion: "Sobre"
    },
    {
      codigo: "s104",
      imagen: "../assets/accesorios/sobres/5.jpg",
      precio: "750",
      descripcion: "Sobre"
    },
    {
      codigo: "s105",
      imagen: "../assets/accesorios/sobres/6.jpg",
      precio: "640",
      descripcion: "Sobre"
    },
    {
      codigo: "s106",
      imagen: "../assets/accesorios/sobres/7.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s107",
      imagen: "../assets/accesorios/sobres/8.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s108",
      imagen: "../assets/accesorios/sobres/9.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s109",
      imagen: "../assets/accesorios/sobres/10.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s110",
      imagen: "../assets/accesorios/sobres/11.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s111",
      imagen: "../assets/accesorios/sobres/12.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s112",
      imagen: "../assets/accesorios/sobres/13.jpg",
      precio: "290",
      descripcion: "Sobre"
    },
    {
      codigo: "s113",
      imagen: "../assets/accesorios/sobres/14.jpg",
      precio: "300",
      descripcion: "Sobre"
    },
    {
      codigo: "s114",
      imagen: "../assets/accesorios/sobres/15.jpg",
      precio: "690",
      descripcion: "Sobre"
    },
    {
      codigo: "s115",
      imagen: "../assets/accesorios/sobres/16.jpg",
      precio: "640",
      descripcion: "Sobre"
    },
    {
      codigo: "s116",
      imagen: "../assets/accesorios/sobres/17.jpg",
      precio: "620",
      descripcion: "Sobre"
    },
    {
      codigo: "s117",
      imagen: "../assets/accesorios/sobres/18.jpg",
      precio: "720",
      descripcion: "Sobre"
    },
    {
      codigo: "s118",
      imagen: "../assets/accesorios/sobres/19.jpg",
      precio: "720",
      descripcion: "Sobre"
    },
    {
      codigo: "s119",
      imagen: "../assets/accesorios/sobres/20.jpg",
      precio: "690",
      descripcion: "Sobre"
    },
  ]
  sombras=[
    {
      codigo: "so100",
      imagen: "../assets/accesorios/sombras/1.jpg",
      precio: "360",
      descripcion: "Sombra"
    },
    {
      codigo: "so101",
      imagen: "../assets/accesorios/sombras/2.jpg",
      precio: "360",
      descripcion: "Sombra"
    },
    {
      codigo: "so102",
      imagen: "../assets/accesorios/sombras/3.jpg",
      precio: "480",
      descripcion: "Sombra"
    },
    {
      codigo: "so103",
      imagen: "../assets/accesorios/sombras/4.jpg",
      precio: "440",
      descripcion: "Sombra"
    },
    {
      codigo: "so104",
      imagen: "../assets/accesorios/sombras/5.jpg",
      precio: "440",
      descripcion: "Sombra"
    },
    {
      codigo: "so105",
      imagen: "../assets/accesorios/sombras/6.jpg",
      precio: "440",
      descripcion: "Sombra"
    },
    {
      codigo: "so106",
      imagen: "../assets/accesorios/sombras/7.jpg",
      precio: "440",
      descripcion: "Sombra"
    },
    {
      codigo: "so107",
      imagen: "../assets/accesorios/sombras/8.jpg",
      precio: "360",
      descripcion: "Sombra"
    },
    {
      codigo: "so108",
      imagen: "../assets/accesorios/sombras/9.jpg",
      precio: "420",
      descripcion: "Sombra"
    },
    {
      codigo: "so109",
      imagen: "../assets/accesorios/sombras/10.jpg",
      precio: "420",
      descripcion: "Sombra"
    },
    {
      codigo: "so110",
      imagen: "../assets/accesorios/sombras/11.jpg",
      precio: "420",
      descripcion: "Sombra"
    },
    {
      codigo: "so111",
      imagen: "../assets/accesorios/sombras/12.jpg",
      precio: "680",
      descripcion: "Sombra"
    },
    {
      codigo: "so112",
      imagen: "../assets/accesorios/sombras/13.jpg",
      precio: "680",
      descripcion: "Sombra"
    },
    {
      codigo: "so113",
      imagen: "../assets/accesorios/sombras/14.jpg",
      precio: "480",
      descripcion: "Sombra"
    },
    {
      codigo: "so114",
      imagen: "../assets/accesorios/sombras/15.jpg",
      precio: "480",
      descripcion: "Sombra"
    },
    {
      codigo: "so115",
      imagen: "../assets/accesorios/sombras/16.jpg",
      precio: "320",
      descripcion: "Sombra"
    },
    {
      codigo: "so116",
      imagen: "../assets/accesorios/sombras/17.jpg",
      precio: "320",
      descripcion: "Sombra"
    },
    {
      codigo: "so117",
      imagen: "../assets/accesorios/sombras/18.jpg",
      precio: "320",
      descripcion: "Sombra"
    },
    {
      codigo: "so118",
      imagen: "../assets/accesorios/sombras/19.jpg",
      precio: "320",
      descripcion: "Sombra"
    },
    {
      codigo: "so119",
      imagen: "../assets/accesorios/sombras/20.jpg",
      precio: "380",
      descripcion: "Sombra"
    },
    {
      codigo: "so120",
      imagen: "../assets/accesorios/sombras/21.jpg",
      precio: "230",
      descripcion: "Sombra"
    },
    {
      codigo: "so121",
      imagen: "../assets/accesorios/sombras/22.jpg",
      precio: "230",
      descripcion: "Sombra"
    },
    {
      codigo: "so122",
      imagen: "../assets/accesorios/sombras/23.jpg",
      precio: "395",
      descripcion: "Sombra"
    },
    {
      codigo: "so123",
      imagen: "../assets/accesorios/sombras/24.jpg",
      precio: "420",
      descripcion: "Sombra"
    },
    {
      codigo: "so124",
      imagen: "../assets/accesorios/sombras/25.jpg",
      precio: "420",
      descripcion: "Sombra"
    },
    {
      codigo: "so125",
      imagen: "../assets/accesorios/sombras/26.jpg",
      precio: "265",
      descripcion: "Sombra"
    },
    {
      codigo: "so126",
      imagen: "../assets/accesorios/sombras/27.jpg",
      precio: "265",
      descripcion: "Sombra"
    },
    {
      codigo: "so127",
      imagen: "../assets/accesorios/sombras/28.jpg",
      precio: "210",
      descripcion: "Sombra"
    },
    {
      codigo: "so128",
      imagen: "../assets/accesorios/sombras/29.jpg",
      precio: "210",
      descripcion: "Sombra"
    },
    {
      codigo: "so129",
      imagen: "../assets/accesorios/sombras/30.jpg",
      precio: "515",
      descripcion: "Sombra"
    },
    {
      codigo: "so130",
      imagen: "../assets/accesorios/sombras/31.jpg",
      precio: "160",
      descripcion: "Sombra"
    },
    {
      codigo: "so131",
      imagen: "../assets/accesorios/sombras/32.jpg",
      precio: "",
      descripcion: "Sombra"
    },
    {
      codigo: "so132",
      imagen: "../assets/accesorios/sombras/33.jpg",
      precio: "490",
      descripcion: "Sombra"
    },
    {
      codigo: "so133",
      imagen: "../assets/accesorios/sombras/34.jpg",
      precio: "595",
      descripcion: "Sombra"
    },
    {
      codigo: "so134",
      imagen: "../assets/accesorios/sombras/35.jpg",
      precio: "",
      descripcion: "Sombra"
    },
    {
      codigo: "so135",
      imagen: "../assets/accesorios/sombras/36.jpg",
      precio: "",
      descripcion: "Sombra"
    },
    {
      codigo: "so136",
      imagen: "../assets/accesorios/sombras/37.jpg",
      precio: "435",
      descripcion: "Sombra"
    },
    {
      codigo: "so137",
      imagen: "../assets/accesorios/sombras/38.jpg",
      precio: "360",
      descripcion: "Sombra"
    },
    {
      codigo: "so138",
      imagen: "../assets/accesorios/sombras/39.jpg",
      precio: "210",
      descripcion: "Sombra"
    },
    {
      codigo: "so139",
      imagen: "../assets/accesorios/sombras/40.jpg",
      precio: "210",
      descripcion: "Sombra"
    },
    {
      codigo: "so140",
      imagen: "../assets/accesorios/sombras/41.jpg",
      precio: "",
      descripcion: "Sombra"
    },
    {
      codigo: "so141",
      imagen: "../assets/accesorios/sombras/42.jpg",
      precio: "",
      descripcion: "Sombra"
    },
    {
      codigo: "so142",
      imagen: "../assets/accesorios/sombras/43.jpg",
      precio: "",
      descripcion: "Sombra"
    },
    {
      codigo: "so143",
      imagen: "../assets/accesorios/sombras/44.jpg",
      precio: "",
      descripcion: "Sombra"
    },
    
  ]
  tarjeteros=[
    {
      codigo: "t100",
      imagen: "../assets/accesorios/tarjeteros/1.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t101",
      imagen: "../assets/accesorios/tarjeteros/2.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t102",
      imagen: "../assets/accesorios/tarjeteros/3.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t103",
      imagen: "../assets/accesorios/tarjeteros/4.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t104",
      imagen: "../assets/accesorios/tarjeteros/5.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t105",
      imagen: "../assets/accesorios/tarjeteros/6.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t106",
      imagen: "../assets/accesorios/tarjeteros/7.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t107",
      imagen: "../assets/accesorios/tarjeteros/8.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t108",
      imagen: "../assets/accesorios/tarjeteros/9.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t109",
      imagen: "../assets/accesorios/tarjeteros/10.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t110",
      imagen: "../assets/accesorios/tarjeteros/11.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
    {
      codigo: "t111",
      imagen: "../assets/accesorios/tarjeteros/12.jpg",
      precio: "330",
      descripcion: "Tarjetero"
    },
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
    if (this.accesorio.tipo == 'abanicos'){
      this.imag = "../assets/acc/abanicos.png"
      this.acc = this.abanicos;
    }
    else if (this.accesorio.tipo == 'abridores'){
      this.imag = "../assets/acc/abridores.png"
      this.acc = this.abridores;
    }
    else if (this.accesorio.tipo == 'alcoholEnGel'){
      this.imag = "../assets/acc/alcoholEnGel.png"
      this.acc = this.alcoholes;
    }
    else if (this.accesorio.tipo == 'anillosAcero'){
      this.imag = "../assets/acc/anillosAcero.png"
      this.acc = this.anillos;
    }
    else if (this.accesorio.tipo == 'billeteras'){
      this.imag = "../assets/acc/billeteras.png"
      this.acc = this.billeteras;
    }
    else if (this.accesorio.tipo == 'billeterasHombre'){
      this.imag = "../assets/acc/billeteras.png"
      this.acc = this.billeterasHombre;
    }
    else if (this.accesorio.tipo == 'carteras'){
      this.imag = "../assets/acc/carteras.png"
      this.acc = this.carteras;
    }
    else if (this.accesorio.tipo == 'cintos'){
      this.imag = "../assets/acc/cintos.png"
      this.acc = this.cintos;
    }
    else if (this.accesorio.tipo == 'collares'){
      this.imag = "../assets/acc/collares.png"
      this.acc = this.collares;
    }
    else if (this.accesorio.tipo == "colitas"){
      this.imag = "../assets/acc/colitas.png"
      this.acc = this.colitas
    }
    else if (this.accesorio.tipo == "delineadores"){
      this.imag = "../assets/acc/delineadores.png"
      this.acc = this.delineadores
    }
    else if (this.accesorio.tipo == "dijes"){
      this.imag = "../assets/acc/dijes.png"
      this.acc = this.dijes
    }
    else if (this.accesorio.tipo == "esmaltes"){
      this.imag = "../assets/acc/esmaltes.png"
      this.acc = this.esmaltes
    }
    else if (this.accesorio.tipo == "gorras"){
      this.imag = "../assets/acc/gorras.png"
      this.acc = this.gorras
    }
    else if (this.accesorio.tipo == "iluminadores"){
      this.imag = "../assets/acc/iluminadores.png"
      this.acc = this.iluminadores
    }
    else if (this.accesorio.tipo == "labiales"){
      this.imag = "../assets/acc/labiales.png"
      this.acc = this.labiales
    }
    else if (this.accesorio.tipo == "mochilas"){
      this.imag = "../assets/acc/mochilas.png"
      this.acc = this.mochilas
    }
    else if (this.accesorio.tipo == "necesers"){
      this.imag = "../assets/acc/necesers.png"
      this.acc = this.necesers
    }
    else if (this.accesorio.tipo == "pinceles"){
      this.imag = "../assets/acc/pincelesYEsponjas.png"
      this.acc = this.pinceles
    }
    else if (this.accesorio.tipo == "pulseras"){
      this.imag = "../assets/acc/pulseras.png"
      this.acc = this.pulseras
    }
    else if (this.accesorio.tipo == "relojes"){
      this.imag = "../assets/acc/relojes.png"
      this.acc = this.relojes
    }
    else if (this.accesorio.tipo == "riñoneras"){
      this.imag = "../assets/acc/riñoneras.png"
      this.acc = this.riñoneras
    }
    else if (this.accesorio.tipo == "sobres"){
      this.imag = "../assets/acc/sobres.png"
      this.acc = this.sobres
    }
    else if (this.accesorio.tipo == "sombras"){
      this.imag = "../assets/acc/sombras.png"
      this.acc = this.sombras
    }
    else if (this.accesorio.tipo == "tarjeteros"){
      this.imag = "../assets/acc/tarjeteros.png"
      this.acc = this.tarjeteros
    }
    else if (this.accesorio.tipo == "vinchas"){
      this.imag = "../assets/acc/vinchas.png"
      this.acc = this.vinchas
    }
    this.acc.forEach(value => {
      this.album.push({'src': value.imagen, 'caption': value.codigo + ' - ' + '$' + value.precio})
    })
    /*this.service.getAccesorios(this.accesorio.tipo).subscribe(data => {this.acc= data, 
      data.forEach(value => {
      this.album.push({'src': value.imagen, 'caption': value.codigo + ' - ' + '$' + value.precio})
    })
  })*/
      }
    
  agCarrito(i){
    this.service.addItems(i);
    window.alert("Se ha añadido este artículo al carrito")
  }
    }

