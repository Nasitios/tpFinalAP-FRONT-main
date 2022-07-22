import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-expe',
  templateUrl: './agregar-expe.component.html',
  styleUrls: ['./agregar-expe.component.css']
})
export class AgregarExpeComponent implements OnInit {

  @Output() onAgregarExperiencia: EventEmitter<FormData> = new EventEmitter();

  titulo: string = "";
  empresa: string = "";
  fecha: string = "";
  ubicacion: string = "";

  abrirExperiencia: boolean = false;
  aderir?: Subscription;
  activeForm: any = FormGroup;
  public nombreUsuario: any;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    private tokenService: TokenService
  ) { 
    this.activeForm = this.fb.group({
      titulo: new FormControl,
      empresa: new FormControl,
      fecha: new FormControl,
      ubicacion: new FormControl
    })

    this.aderir = this.uiService.onToggleExperiencia()
          .subscribe(value => this.abrirExperiencia = value)
  }
  
  ngOnInit(): void {
    if(this.tokenService.estaLogeado()){
      this.nombreUsuario = this.tokenService.traerNombreUsuario();
    }
  }


  onSubmit(submitForm: FormGroup){
    const entidad = submitForm.value;
    const nombreUs = this.nombreUsuario;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad));
    formData.append('nombreUs', nombreUs);

    this.onAgregarExperiencia.emit(formData);
    this.abrirExperiencia = false;
    this.uiService.toggleAgregarExperiencia();

  }
}
