import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'movimientos',
    component: MovimientoComponent
  },
  {
    path: 'consultar',
    component: ConsultaComponent
  },
  {
  path: '**',
  redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
