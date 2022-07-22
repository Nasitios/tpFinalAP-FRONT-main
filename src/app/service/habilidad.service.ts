import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  apiBackHabi = environment.apiBackHabi;

  constructor(
    private http: HttpClient
  ) { }

  getHabilidad(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.apiBackHabi)
  }

  get(id: number): Observable<Habilidad> {
    const url = `${this.apiBackHabi}/${id}`
    return this.http.get<Habilidad>(url);
  }

  masHabilidades(formData: FormData): Observable<any> {
    return this.http.post(this.apiBackHabi + 'crear', formData);
  }

  editHabilidad(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiBackHabi + `editar/${id}`, formData)
  }

  eliminarHabilidad(id: number): Observable<Habilidad> {
    return this.http.delete<Habilidad>(this.apiBackHabi + `eliminar/${id}`)
  }


}
