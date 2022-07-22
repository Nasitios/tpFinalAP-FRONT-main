import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  apiBackPro = environment.apiBackPro;

  constructor(
    private http: HttpClient
  ) { }

  getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiBackPro)
  }

  get(id: number): Observable<Proyecto> {
    const url = `${this.apiBackPro}/${id}`
    return this.http.get<Proyecto>(url);
  }

  masProyectos(formData: FormData): Observable<any> {
    return this.http.post(this.apiBackPro + 'crear', formData);
  }

  editProyecto(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiBackPro + `editar/${id}`, formData)
  }

  eliminarProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(this.apiBackPro + `eliminar/${id}`)
  }


}
