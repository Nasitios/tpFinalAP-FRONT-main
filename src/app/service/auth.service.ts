import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jwt } from '../models/jwt';
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  public nuevoUsuario(nuevoUsuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'crear', nuevoUsuario);
  }

  public login(loginUsuario: Login): Observable<Jwt> {
    return this.httpClient.post<Jwt>(this.authUrl + 'login', loginUsuario);
  }

  public refresh(dto: Jwt): Observable<Jwt> {
    return this.httpClient.post<Jwt>(this.authUrl + 'refrescar', dto);
  }

}
