import { Component, OnInit } from '@angular/core';
import { DataService } from '../../serviceslista/data.service';
import { heroeslistamodel } from '../models/heroeslistamodel';

@Component({
  selector: 'app-heroeslista',
  templateUrl: './heroeslista.component.html',
  styleUrls: ['./heroeslista.component.css']
})
export class HeroeslistaComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _data: DataService) { }

  heroes: heroeslistamodel[] = [];
  ngOnInit(): void {
    this._data.getHeroeslista().subscribe(data => {
      this.heroes = data ;
      console.log(data);
    });
  }

}
