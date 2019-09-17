import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  guardar(formulario: NgForm) {
    console.log(formulario.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
