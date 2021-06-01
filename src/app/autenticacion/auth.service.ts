import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginUserModel } from './class/login.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey =  'AIzaSyAS-dgkaEDU46Y-xKcn453s90GGM6CGvss';
  // tslint:disable-next-line: variable-name
  user_token: string;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    this.leerToken();
  }

  // tslint:disable-next-line: typedef
  login(usuario: LoginUserModel){
    const authData = {
        ...usuario,
        returnSecureToken: true
    };
    return this._http.post(`${this.url}signInWithPassword?key=${ this.apikey }`, authData).pipe(
      map(res => {
          // tslint:disable-next-line: no-string-literal
          this.guadarToken(res['idToken']);
          return res;
      })
    );
  }

  // tslint:disable-next-line: typedef
  salir(){
    localStorage.removeItem('token');
  }

  // tslint:disable-next-line: typedef
  private guadarToken(idToken: string){
    this.user_token = idToken;
    localStorage.setItem('token', idToken);
    // tslint:disable-next-line: prefer-const
    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  // tslint:disable-next-line: typedef
  private leerToken(){
    if (localStorage.getItem('token')){
      this.user_token = localStorage.getItem('token');
    }else{
      this.user_token = '';
    }
    return this.user_token;
  }

  estaAutenticado(): boolean{
    if (this.user_token.length < 2){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()){
      return true;
    }else{
      return false;
    }
  }




}

