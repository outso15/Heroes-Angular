import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  usuarios = [
    {
      nombre: 'Andres',
      apellido: 'x',
      codigo: '22122'
    },
    {
      nombre: 'Juan',
      apellido: 'x',
      codigo: '22122'
    }
  ];
  usuariosI = [
    {
      nombre: 'Andres',
      apellido: 'x'
    },
    {
      nombre: 'Juan',
      apellido: 'x'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
