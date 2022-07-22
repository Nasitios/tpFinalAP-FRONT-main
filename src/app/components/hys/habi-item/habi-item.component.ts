import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTrash, faPenClip } from '@fortawesome/free-solid-svg-icons';
import { HABI } from 'src/app/mock-tasck';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';
import { HabilidadesComponent } from '../habilidades/habilidades.component';

@Component({
  selector: 'app-habi-item',
  templateUrl: './habi-item.component.html',
  styleUrls: ['./habi-item.component.css']
})
export class HabiItemComponent implements OnInit {

  activeForm: any = FormGroup;

  faDelete = faTrash;
  faPencil = faPenClip;

  @Input() habi: Habilidad = HABI[0];
  @Output() onEliminarHabi: EventEmitter<Habilidad> = new EventEmitter();

  public abrirModal: boolean = false;
  public esAdmin: boolean = false;

  titulo: string = "";
  porcentaje: number = 0;

  constructor(
    private habiSer: HabilidadService,
    private fb: FormBuilder,
    private emit: HabilidadesComponent,
    private tokenService: TokenService
  ) { 
    this.activeForm = this.fb.group({
      titulo: new FormControl,
      porcentaje: new FormControl
    })
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  editarHabilidad(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))
    
    this.habiSer.editHabilidad(this.habi.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarHabi(habi: Habilidad){
    this.onEliminarHabi.emit(habi)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }

}
