import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidad[] = [];

  constructor(
    private habiSer: HabilidadService
  ) { }

  ngOnInit(): void {
    this.habiSer.getHabilidad().subscribe((habilidades) => {
      this.habilidades = habilidades;
    })
  }

  agregarHabilidades(event: any) {

    this.habiSer.masHabilidades(event).subscribe((habi) => {
      this.habilidades.push(habi)
      this.habiSer.getHabilidad().subscribe((habilidades) => {
        this.habilidades = habilidades;
      })
    })

  }

  eliminarHabilidades(habi: Habilidad) {

    this.habiSer.eliminarHabilidad(habi.id)
      .subscribe(() => {
        this.habilidades = this.habilidades.filter((t) => t.id !== habi.id)
      })

  }

}
