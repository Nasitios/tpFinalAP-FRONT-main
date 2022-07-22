import { Token } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTrash, faPenClip } from '@fortawesome/free-solid-svg-icons';
import { ACER } from 'src/app/mock-tasck';
import { Acercade } from 'src/app/models/acercade';
import { AcerdadeService } from 'src/app/service/acerdade.service';
import { TokenService } from 'src/app/service/token.service';
import { EspacioComponent } from '../espacio/espacio.component';

@Component({
  selector: 'app-espa-item',
  templateUrl: './espa-item.component.html',
  styleUrls: ['./espa-item.component.css']
})
export class EspaItemComponent implements OnInit {

  activeForm: any = FormGroup;

  faDelete = faTrash;
  faPencil = faPenClip;

  @Input() espa: Acercade = ACER[0];
  @Output() onEliminarEspa: EventEmitter<Acercade> = new EventEmitter();

  public abrirModal: boolean = false;
  public esAdmin: boolean = false;

  texto: string = "";

  constructor(
    private acerSer: AcerdadeService,
    private fb: FormBuilder,
    private emit: EspacioComponent,
    private tokenService: TokenService
  ) { 
    this.activeForm = this.fb.group({
      texto: new FormControl
    })
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  editarEspa(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))
    
    this.acerSer.editContenedores(this.espa.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarEspa(espa: Acercade){
    this.onEliminarEspa.emit(espa)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }


}
