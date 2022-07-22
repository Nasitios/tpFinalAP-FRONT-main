import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Login } from 'src/app/models/login';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  loginFail = false;
  loginUsuario!: Login;

  nombreUsuario: string = "";
  password: string = "";
  errMsj: string = "";

  public abrirModalReg: Boolean = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.traerToken()) {
      this.loginFail = false;
    }
  }

  onLogin(): void {
    this.loginUsuario = new Login(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next:(data) => {
        this.loginFail = false;
        this.tokenService.cambiarToken(data.token);
        location.replace('/');
      },
      error:(err: any) => {
        this.loginFail = true;
        this.errMsj = err.error.message;
      }
    })

  }
  abrirModalRegistro(){
    this.abrirModalReg = true;
  }

  cerrarModalRegistro(){
    this.abrirModalReg = false;
  }
}
