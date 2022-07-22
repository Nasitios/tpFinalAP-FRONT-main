import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencias: Experiencia[] = [];

  constructor(
    private expeSer: ExperienciaService
  ) { }

  ngOnInit(): void {
    this.expeSer.getExperiencia().subscribe((experiencias) => {
      this.experiencias = experiencias;
    })
  }

  agregarExperiencias(event: any) {

    this.expeSer.masExperiecnias(event).subscribe((expe) => {
      this.experiencias.push(expe)
      this.expeSer.getExperiencia().subscribe((experiencias) => {
        this.experiencias = experiencias;
      })
    })

  }

  eliminarExperiencias(expe: Experiencia) {

    this.expeSer.eliminarExperiencia(expe.id)
      .subscribe(() => {
        this.experiencias = this.experiencias.filter((t) => t.id !== expe.id)
      })

  }

}
