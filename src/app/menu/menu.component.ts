import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Clientes',
      path: '/clientes'
    },
    {
      name: 'Movimientos',
      path: '/movimientos'
    },
    {
      name: 'Consultar',
      path: '/consultar'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
