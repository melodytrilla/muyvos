import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.sass']
})
export class NavTopComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  sendTo(a){
    let url=`/accesorios/${a}`;
    this.router.navigateByUrl(url);
    window.location.assign(url)
  }
}

