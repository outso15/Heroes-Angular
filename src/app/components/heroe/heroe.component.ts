import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    // tslint:disable-next-line: variable-name
    private _activatedRoute: ActivatedRoute,
    // tslint:disable-next-line: variable-name
    private _dataService: DataService) {
    this._activatedRoute.params.subscribe(data => {

      // tslint:disable-next-line: no-string-literal
      this.heroe = this._dataService.getHeroe(data['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
