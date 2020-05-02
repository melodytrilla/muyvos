import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoriosService } from '../accesorios.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.sass']
})
export class NavTopComponent implements OnInit {

  constructor(public router: Router,
              public service: AccesoriosService ) { }

  ngOnInit() {
    this.service.init()
  }
  sendTo(a){
    let url=`/accesorios/${a}`;
    this.router.navigateByUrl(url);
    window.location.assign(url)
  }
}

