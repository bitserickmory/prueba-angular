import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  guardar(formulario: NgForm) {
    console.log(formulario.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
