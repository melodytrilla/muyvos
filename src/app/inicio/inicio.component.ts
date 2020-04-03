import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass'],
  providers: [NgbCarouselConfig]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

