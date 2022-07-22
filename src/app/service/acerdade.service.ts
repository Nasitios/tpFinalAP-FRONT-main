import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acercade } from '../models/acercade';

@Injectable({
  providedIn: 'root'
})
export class AcerdadeService {

  apiBackAcer = environment.apiBackAcer;

  constructor(
    private http: HttpClient
  ) { }

  getContenedor(): Observable<Acercade[]> {
    return this.http.get<Acercade[]>(this.apiBackAcer)
  }

  get(id: number): Observable<Acercade> {
    const url = `${this.apiBackAcer}/${id}`
    return this.http.get<Acercade>(url);
  }

  masContenedores(formData: FormData): Observable<any> {
    return this.http.post(this.apiBackAcer + 'crear', formData);
  }

  editContenedores(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiBackAcer + `editar/${id}`, formData)
  }

  eliminarContenedor(id: number): Observable<Acercade> {
    return this.http.delete<Acercade>(this.apiBackAcer + `eliminar/${id}`)
  }

}
