import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/app/models/acercade';
import { AcerdadeService } from 'src/app/service/acerdade.service';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {

  espacios: Acercade[] = [];

  constructor(
    private espaSer: AcerdadeService
  ) { }

  ngOnInit(): void {
    this.espaSer.getContenedor().subscribe((espacios) => {
      this.espacios = espacios;
    })
  }

  agregarEspacios(event: any) {

    this.espaSer.masContenedores(event).subscribe((espa) => {
      this.espacios.push(espa)
      this.espaSer.getContenedor().subscribe((espacios) => {
        this.espacios = espacios;
      })
    })

  }

  eliminarEspacios(espa: Acercade) {

    this.espaSer.eliminarContenedor(espa.id)
      .subscribe(() => {
        this.espacios = this.espacios.filter((t) => t.id !== espa.id)
      })

  }

}
