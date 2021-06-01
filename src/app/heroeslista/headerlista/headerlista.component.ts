import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headerlista',
  templateUrl: './headerlista.component.html',
  styleUrls: ['./headerlista.component.css']
})
export class HeaderlistaComponent implements OnInit {

  @Input () titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
