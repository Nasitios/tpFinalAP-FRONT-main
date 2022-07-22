import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTrash, faPenClip } from '@fortawesome/free-solid-svg-icons';
import { EDU } from 'src/app/mock-tasck';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { EducacionesComponent } from '../educaciones/educaciones.component';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit {

  activeForm: any = FormGroup;

  faDelete = faTrash;
  faPencil = faPenClip;

  @Input() edu: Educacion = EDU[0];
  @Output() onEliminarEdu: EventEmitter<Educacion> = new EventEmitter();

  public abrirModal: boolean = false;
  public esAdmin: boolean = false;

  entidad: string = "";
  titulo: string = "";
  fecha: string = "";
  ubicacion: string = "";

  constructor(
    private eduSer: EducacionService,
    private fb: FormBuilder,
    private emit: EducacionesComponent,
    private tokenService: TokenService
  ) { 
    this.activeForm = this.fb.group({
      entidad: new FormControl,
      titulo: new FormControl,
      fecha: new FormControl,
      ubicacion: new FormControl
    })
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  editarEducacion(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))
    
    this.eduSer.editEducacion(this.edu.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarEdu(edu: Educacion){
    this.onEliminarEdu.emit(edu)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }

}
