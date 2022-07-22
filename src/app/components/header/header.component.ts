import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public okMenu: boolean = false;
  public estaLogeado: boolean = false;
  public abrirFormularioLogin: boolean = false;
  public abrirModalReg: Boolean = false;

  faLogin = faAngleRight;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.estaLogeado = this.tokenService.estaLogeado();
  }

  onMenu() {
    this.okMenu = true;
  }

  cerrarMenu(){
    this.okMenu = false
  }

  cerrarSesion(){
    this.tokenService.logOut();
  }

  abrirModal(){
    this.abrirFormularioLogin = true;
  }

  cerrarModal(){
    this.abrirFormularioLogin = false;
  }

  abrirModalRegistro(){
    this.abrirModalReg = true;
  }

  cerrarModalRegistro(){
    this.abrirModalReg = false;
    this.abrirFormularioLogin = true;
  }

}
