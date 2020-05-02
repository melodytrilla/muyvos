import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../accesorios.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass']
})
export class CarritoComponent implements OnInit {

  constructor(private service: AccesoriosService) { }

  total: number =0;
  items: any[]
  ngOnInit() {
    this.items = this.service.getItems();
    console.log(this.items)
    for(let item of this.items){

      this.total = this.total + parseInt(item.precio, 10);
    }
  }
  borrar(i){
    this.service.borrarItem(i)
    this.items = this.service.getItems()
  }

}
