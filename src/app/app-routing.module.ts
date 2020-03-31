import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import {  NosotrosComponent} from './nosotros/nosotros.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'accesorios/:tipo', component: AccesoriosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
