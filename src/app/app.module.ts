import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    AccesoriosComponent,
    NavTopComponent,
    NavBottomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  exports: [InicioComponent],
  providers: [],
  bootstrap: [AppComponent, InicioComponent]
})
export class AppModule { }
