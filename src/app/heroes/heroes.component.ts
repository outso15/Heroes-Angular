import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HeroeInterface } from '../interface/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeInterface[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _dataService: DataService) {
  this.heroes = this._dataService.getHeroes();

  }

  ngOnInit(): void {
  }

}
