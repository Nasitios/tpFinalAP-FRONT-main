import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTrash, faPenClip } from '@fortawesome/free-solid-svg-icons';
import { PER } from 'src/app/mock-tasck';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
import { TokenService } from 'src/app/service/token.service';
import { PerfilesComponent } from '../perfiles/perfiles.component';

@Component({
  selector: 'app-per-item',
  templateUrl: './per-item.component.html',
  styleUrls: ['./per-item.component.css']
})
export class PerItemComponent implements OnInit {

  activeForm: any = FormGroup;

  @Input() per: Perfil = PER[0];
  @Output() onEliminarPer: EventEmitter<Perfil> = new EventEmitter();

  public abrirModal: boolean = false;
  public esAdmin: boolean = false;
  public usFilePerfil: any = File;
  public usFilePortada: any = File;

  faDelete = faTrash;
  faPencil = faPenClip;

  nombre: string = "";
  titulo: string = "";
  ubicacion: string = "";
  email: string = "";
  github: string = "";
  linkedin: string = "";
  instagram: string = "";


  constructor(
    private eduPer: PerfilService,
    private fb: FormBuilder,
    private emit: PerfilesComponent,
    private tokenService: TokenService
  ) { 
    this.activeForm = this.fb.group({
      nombre: new FormControl,
      titulo: new FormControl,
      ubicacion: new FormControl,
      email: new FormControl,
      github: new FormControl,
      linkedin: new FormControl,
      instagram: new FormControl
    })
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  capturarPerfil(event: any) {
    const imgPerfil = event.target.files[0];
    this.usFilePerfil = imgPerfil;
  }

  capturarPortada(event: any) {
    const imgPortada = event.target.files[0];
    this.usFilePortada = imgPortada;
  }

  editarPerfil(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad));
    formData.append('imagenPerfilEditada', this.usFilePerfil);
    formData.append('imagenPortadaEditada', this.usFilePortada);
    
    this.eduPer.editPerfil(this.per.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarPer(per: Perfil){
    this.onEliminarPer.emit(per)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }

}
