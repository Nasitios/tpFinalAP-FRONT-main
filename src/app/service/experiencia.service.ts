import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  apiBackExpe = environment.apiBackExpe;

  constructor(
    private http: HttpClient
  ) { }

  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiBackExpe)
  }

  get(id: number): Observable<Experiencia> {
    const url = `${this.apiBackExpe}/${id}`
    return this.http.get<Experiencia>(url);
  }

  masExperiecnias(formData: FormData): Observable<any> {
    return this.http.post(this.apiBackExpe + 'crear', formData);
  }

  editExperiencia(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiBackExpe + `editar/${id}`, formData)
  }

  eliminarExperiencia(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.apiBackExpe + `eliminar/${id}`)
  }

}
