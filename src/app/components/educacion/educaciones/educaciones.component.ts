import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {

  educaciones: Educacion[] = [];

  constructor(
    private eduSer: EducacionService
  ) { }

  ngOnInit(): void {
    this.eduSer.getEducacion().subscribe((educaciones) => {
      this.educaciones = educaciones;
    })
  }

  agregarEducaciones(event: any) {

    this.eduSer.masEducaciones(event).subscribe((edu) => {
      this.educaciones.push(edu)
      this.eduSer.getEducacion().subscribe((educaciones) => {
        this.educaciones = educaciones;
      })
    })

  }

  eliminarEducaciones(edu: Educacion) {

    this.eduSer.eliminarEducacion(edu.id)
      .subscribe(() => {
        this.educaciones = this.educaciones.filter((t) => t.id !== edu.id)
      })

  }

}
