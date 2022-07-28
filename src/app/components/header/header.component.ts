import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';
import { PerfilService } from 'src/app/service/perfil.service';
import { Perfil } from 'src/app/models/perfil';
import { PER } from 'src/app/mock-tasck';

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
  public per: Perfil = PER[0];
  faLogin = faAngleRight;

  constructor(
    private tokenService: TokenService,
    public perfilobter: PerfilService) { }


  ngOnInit(): void {
    this.estaLogeado = this.tokenService.estaLogeado();
    this.perfilobter.getPerfil().subscribe((data) => {
      if (data.length>0){
      this.per = data[0];}
    }) 
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

}
