import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { heroeslistamodel } from '../heroeslista/models/heroeslistamodel';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://heroes-c8cd5.firebaseio.com';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getHeroeslista(){
    return this._http.get(`${this.url}/heroes.json`).pipe(map(this.crearArregloHeroes));
  }

  // tslint:disable-next-line: typedef
  getHeroelista(id){
    return this._http.get(`${this.url}/heroes/${id}.json`);
  }
  // tslint:disable-next-line: typedef
  putheroe(heroe: heroeslistamodel){
    const heroetemp = {
      ...heroe
    };
    delete heroetemp.id_heroe;
    return this._http.put(`${this.url}/heroes/${heroe.id_heroe}.json`, heroetemp);
  }
  // tslint:disable-next-line: typedef
  postheroe(heroe: heroeslistamodel){
    return this._http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
        heroe.id_heroe = resp.name;
        return heroe;
      })
    );

  }

  // tslint:disable-next-line: typedef
  private crearArregloHeroes(heroe: object){
    const heroes: heroeslistamodel[] = [];
    if (heroe == null){
      return [];
    }
    Object.keys(heroe).forEach(key => {
      const heroes2: heroeslistamodel = heroe[key];
      heroes2.id_heroe = key;
      heroes.push(heroes2);
    });
    return heroes ;

  }

}
