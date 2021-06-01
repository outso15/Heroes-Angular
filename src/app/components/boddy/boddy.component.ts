import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boddy',
  templateUrl: './boddy.component.html',
  styleUrls: ['./boddy.component.css']
})
export class BoddyComponent implements OnInit {

  bandera = true;

  constructor() { }


  heroes = [
    {
      nombre: 'Batman',
      img: 'https://hipertextual.com/files/2020/05/hipertextual-todos-villanos-que-han-aparecido-peliculas-batman-2020905697.jpg'
    },
    {
      nombre: 'Superman',
      img: 'https://i.blogs.es/c304e7/superman/1366_2000.jpg  '
    },

  ];

  ngOnInit(): void {  }

}
