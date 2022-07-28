import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { UiService } from 'src/app/service/ui.service';
import { PerfilService } from 'src/app/service/perfil.service';
import { Perfil } from 'src/app/models/perfil';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  titulo: string = "Perfil:"

  abrirPerfil: boolean = false;
  subcription?: Subscription;
  public esAdmin: boolean = false;
  private per: Perfil [] = [];
  public desaparecer: boolean = true;

  constructor(
    private uiService: UiService,
    private tokenService: TokenService,
    private perfilobter: PerfilService
  ) {
    this.subcription = this.uiService.onTogglePerfil()
    .subscribe(value => this.abrirPerfil = value)
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
    this.perfilobter.getPerfil().subscribe((data) => {
      this.per = data;
      this.desaparecer = !(this.per.length > 0); 
    }) 
  }

  toogleAgregarPerfil(){
    this.uiService.toggleAgregarPerfil();
  }


}
