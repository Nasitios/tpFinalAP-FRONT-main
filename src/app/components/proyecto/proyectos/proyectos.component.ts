import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(
    private proSer: ProyectoService
  ) { }

  ngOnInit(): void {
    this.proSer.getProyecto().subscribe((proyectos) => {
      this.proyectos = proyectos;
    })
  }

  agregarProyectos(event: any) {

    this.proSer.masProyectos(event).subscribe((pro) => {
      this.proyectos.push(pro)
      this.proSer.getProyecto().subscribe((proyectos) => {
        this.proyectos = proyectos;
      })
    })

  }

  eliminarProyectos(pro: Proyecto) {

    this.proSer.eliminarProyecto(pro.id)
      .subscribe(() => {
        this.proyectos = this.proyectos.filter((t) => t.id !== pro.id)
      })

  }

}
