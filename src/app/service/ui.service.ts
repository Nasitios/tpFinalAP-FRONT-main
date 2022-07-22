import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private agregarEspacio: boolean = false;
  private sujetoEspa = new Subject<any>();

  private agregarExperiencia: boolean = false;
  private sujetoExpe = new Subject<any>();

  private agregarEducacion: boolean = false;
  private sujetoEdu = new Subject<any>();

  private agregarProyecto: boolean = false;
  private sujetoPro = new Subject<any>();

  private agregarHabilidad: boolean = false;
  private sujetoHabi = new Subject<any>();

  private agregarPerfil: boolean = false;
  private sujetoPer = new Subject<any>();

  constructor() { }

  toggleAgregarEspacio():void {
    this.agregarEspacio = !this.agregarEspacio;
    this.sujetoEspa.next(this.agregarEspacio);
  }

  onToggleEspacio(): Observable<any> {
    return this.sujetoEspa.asObservable();
  }

  toggleAgregarExperiencia():void {
    this.agregarExperiencia = !this.agregarExperiencia;
    this.sujetoExpe.next(this.agregarExperiencia);
  }

  onToggleExperiencia(): Observable<any> {
    return this.sujetoExpe.asObservable();
  }

  toggleAgregarEducacion():void {
    this.agregarEducacion = !this.agregarEducacion;
    this.sujetoEdu.next(this.agregarEducacion);
  }

  onToggleEducacion(): Observable<any> {
    return this.sujetoEdu.asObservable();
  }

  toggleAgregarProyecto():void {
    this.agregarProyecto = !this.agregarProyecto;
    this.sujetoPro.next(this.agregarProyecto);
  }

  onToggleProyecto(): Observable<any> {
    return this.sujetoPro.asObservable();
  }

  toggleAgregarHabilidad():void {
    this.agregarHabilidad = !this.agregarHabilidad;
    this.sujetoHabi.next(this.agregarHabilidad);
  }

  onToggleHabilidad(): Observable<any> {
    return this.sujetoHabi.asObservable();
  }

  toggleAgregarPerfil():void {
    this.agregarPerfil = !this.agregarPerfil;
    this.sujetoPer.next(this.agregarPerfil);
  }

  onTogglePerfil(): Observable<any> {
    return this.sujetoPer.asObservable();
  }


}
