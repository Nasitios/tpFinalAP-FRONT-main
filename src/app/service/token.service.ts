import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<String> = [];

  constructor() { }

  public cambiarToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public traerToken(): string {
    return localStorage.getItem(TOKEN_KEY)!;
  }

  public estaLogeado(): boolean {
    if(this.traerToken()) {
      return true;
    }
    return false;
  }

  public traerNombreUsuario(): string {
    if(!this.estaLogeado){
      return null!;
    }
    const token = this.traerToken();
    const payload = token.split('.')[1];
    const payloadDecoder = atob(payload);
    const value = JSON.parse(payloadDecoder);
    const nombreUsuario = value.sub;

    return nombreUsuario;
  }

  public esAdmin(): boolean {

    if(!this.estaLogeado()){
      return false;
    }

    const token = this.traerToken();
    const payload = token.split('.')[1];
    const payloadDecoder = atob(payload);
    const value = JSON.parse(payloadDecoder);
    const roles = value.roles;

    if(roles.indexOf('ROLE_ADMIN') < 0) {
      return false;
    }

    return true;
  }

  public logOut(): void {
    window.localStorage.clear();
    location.reload();
  }

}
