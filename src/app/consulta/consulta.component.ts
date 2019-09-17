import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  guardar(formulario: NgForm) {
    console.log(formulario.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
