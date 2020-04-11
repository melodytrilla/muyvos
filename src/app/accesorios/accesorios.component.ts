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
    },
    {
      codigo: "co104",
      imagen: "../assets/accesorios/colitas/5.jpg",
      precio: "300",
      descripcion: "Colita moño"
    },
    {
      codigo: "co105",
      imagen: "../assets/accesorios/colitas/6.jpg",
      precio: "300",
      descripcion: "Colita moño"
    },
    {
      codigo: "co106",
      imagen: "../assets/accesorios/colitas/7.jpg",
      precio: "300",
      descripcion: "Colita moño"
    },
    {
      codigo: "co107",
      imagen: "../assets/accesorios/colitas/8.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co108",
      imagen: "../assets/accesorios/colitas/9.jpg",
      precio: "190",
      descripcion: "Colita moño"
    },
    {
      codigo: "co109",
      imagen: "../assets/accesorios/colitas/10.jpg",
      precio: "190",
      descripcion: "Colita moño"
    },
    {
      codigo: "co110",
      imagen: "../assets/accesorios/colitas/11.jpg",
      precio: "190",
      descripcion: "Colita moño"
    },
    {
      codigo: "co111",
      imagen: "../assets/accesorios/colitas/12.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co112",
      imagen: "../assets/accesorios/colitas/13.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co113",
      imagen: "../assets/accesorios/colitas/14.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co114",
      imagen: "../assets/accesorios/colitas/15.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co115",
      imagen: "../assets/accesorios/colitas/16.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co116",
      imagen: "../assets/accesorios/colitas/17.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co117",
      imagen: "../assets/accesorios/colitas/18.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co118",
      imagen: "../assets/accesorios/colitas/19.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co119",
      imagen: "../assets/accesorios/colitas/20.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co120",
      imagen: "../assets/accesorios/colitas/21.jpg",
      precio: "130",
      descripcion: "Colita moño"
    },
    {
      codigo: "co121",
      imagen: "../assets/accesorios/colitas/22.jpg",
      precio: "110",
      descripcion: "Colita moño"
    },
    {
      codigo: "co122",
      imagen: "../assets/accesorios/colitas/23.jpg",
      precio: "110",
      descripcion: "Colita moño"
    },
    {
      codigo: "co123",
      imagen: "../assets/accesorios/colitas/24.jpg",
      precio: "110",
      descripcion: "Colita moño"
    },
    {
      codigo: "co124",
      imagen: "../assets/accesorios/colitas/25.jpg",
      precio: "70",
      descripcion: "Colita corazón"
    },
    {
      codigo: "co125",
      imagen: "../assets/accesorios/colitas/26.jpg",
      precio: "70",
      descripcion: "Colita corazón"
    },
    {
      codigo: "co126",
      imagen: "../assets/accesorios/colitas/27.jpg",
      precio: "80",
      descripcion: "Colita moño"
    },
    {
      codigo: "co127",
      imagen: "../assets/accesorios/colitas/28.jpg",
      precio: "190",
      descripcion: "Colita moño"
    },
    {
      codigo: "co128",
      imagen: "../assets/accesorios/colitas/29.jpg",
      precio: "80",
      descripcion: "Colita moño"
    },
    {
      codigo: "co129",
      imagen: "../assets/accesorios/colitas/30.jpg",
      precio: "80",
      descripcion: "Colita moño"
    },
    {
      codigo: "co130",
      imagen: "../assets/accesorios/colitas/31.jpg",
      precio: "80",
      descripcion: "Colita moño"
    },
    {
      codigo: "co131",
      imagen: "../assets/accesorios/colitas/32.jpg",
      precio: "80",
      descripcion: "Colita moño"
    },
    {
      codigo: "co132",
      imagen: "../assets/accesorios/colitas/33.jpg",
      precio: "80",
      descripcion: "Colita moño"
    },
    {
      codigo: "co133",
      imagen: "../assets/accesorios/colitas/34.jpg",
      precio: "80",
      descripcion: "Colita moño"
    },
    {
      codigo: "co134",
      imagen: "../assets/accesorios/colitas/35.jpg",
      precio: "80",
      descripcion: "Colita moño"
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
      precio: "48",
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
      imagen: "../assets/accesorios/relojes/18.jpg",
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
    else if (this.accesorio.tipo == 'billeteras'){
      this.imag = "../assets/acc/billeteras.png"
      this.acc = this.billeteras;
    }
    else if (this.accesorio.tipo == 'billeterasHombre'){
      this.imag = "../assets/acc/billeteras.png"
      this.acc = this.billeterasHombre;
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
    else if (this.accesorio.tipo == "iluminadores"){
      this.imag = "../assets/acc/iluminadores.png"
      this.acc = this.iluminadores
    }
    else if (this.accesorio.tipo == "necesers"){
      this.imag = "../assets/acc/necesers.png"
      this.acc = this.necesers
    }
    else if (this.accesorio.tipo == "relojes"){
      this.imag = "../assets/acc/relojes.png"
      this.acc = this.relojes
    }
    else if (this.accesorio.tipo == "riñoneras"){
      this.imag = "../assets/acc/riñoneras.png"
      this.acc = this.riñoneras
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
    
      
    }

