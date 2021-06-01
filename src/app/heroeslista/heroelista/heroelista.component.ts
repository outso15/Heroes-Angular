import { Component, OnInit } from '@angular/core';
import { DataService } from '../../serviceslista/data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import swa from 'sweetalert2';
import { Observable } from 'rxjs';
import { heroeslistamodel } from '../models/heroeslistamodel';

@Component({
  selector: 'app-heroelista',
  templateUrl: './heroelista.component.html',
  styleUrls: ['./heroelista.component.css']
})
export class HeroelistaComponent implements OnInit {

  id = null;
  heroe: heroeslistamodel = new heroeslistamodel();
  // tslint:disable-next-line: variable-name
  constructor(private _data: DataService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if (this.id !== 'nuevo'){
      this._data.getHeroelista(this.id).subscribe((data: heroeslistamodel) => {
        this.heroe = data;
        this.heroe.id_heroe = this.id;
      });
    }
    // tslint:disable-next-line: triple-equals
    if (this.id == 'nuevo'){
      this.heroe.id_heroe = null;

    }

  }

  // tslint:disable-next-line: typedef
  guardar(form: NgForm){
    if (form.invalid){
    return;
    }
    swa.fire({
      title: 'Espere',
      icon:  'info',
      text: 'Guardando información',
      allowOutsideClick: false

    });
    swa.showLoading();
    let peticion: Observable<any>;

    if (this.heroe.id_heroe){
      peticion = this._data.putheroe(this.heroe);
    }else{
      peticion = this._data.postheroe(this.heroe);
    }

    peticion.subscribe(resp => {
      swa.fire({
        title: this.heroe.nombre,
        icon:  'success',
        text: 'Se actualizo',

      });
    });
  }

}
