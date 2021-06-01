import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';
import { LoginUserModel } from '../../class/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginUserModel = new LoginUserModel();
  recordarme = false;

  // tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  // tslint:disable-next-line: typedef
  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      icon: 'info',
      text: 'Por favor espere',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this._authService.login(this.user).subscribe(res => {
      if (this.recordarme) {
        localStorage.setItem('email', this.user.email);
      }

      setTimeout(() => {
        Swal.close();
        this.router.navigateByUrl('/home');
      }, 500);
    }, (err => {
      Swal.fire({
        icon: 'error',
        text: err.error.error.message
      });
    }));





  }

}
