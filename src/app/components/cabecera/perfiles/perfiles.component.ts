import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {

  perfiles: Perfil[] = [];

  constructor(
    private eduPer: PerfilService
  ) { }

  ngOnInit(): void {
    this.eduPer.getPerfil().subscribe((perfiles) => {
      this.perfiles = perfiles;
    })
  }

  agregarPerfiles(event: any) {

    this.eduPer.masPerfiles(event).subscribe((per) => {
      this.perfiles.push(per)
      this.eduPer.getPerfil().subscribe((perfiles) => {
        this.perfiles = perfiles;
      })
    })

  }

  eliminarPerfiles(per: Perfil) {

    this.eduPer.eliminarPerfil(per.id)
      .subscribe(() => {
        this.perfiles = this.perfiles.filter((t) => t.id !== per.id)
      })

  }

}
