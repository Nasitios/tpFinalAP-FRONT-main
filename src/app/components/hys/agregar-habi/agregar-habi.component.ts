import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-habi',
  templateUrl: './agregar-habi.component.html',
  styleUrls: ['./agregar-habi.component.css']
})
export class AgregarHabiComponent implements OnInit {

  @Output() onAgregarHabilidad: EventEmitter<FormData> = new EventEmitter();

  titulo: string = "";
  porcentaje: number = 0;

  abrirHabilidad: boolean = false;
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
      porcentaje: new FormControl
    })

    this.aderir = this.uiService.onToggleHabilidad()
          .subscribe(value => this.abrirHabilidad = value)
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

    this.onAgregarHabilidad.emit(formData);
    this.abrirHabilidad = false;
    this.uiService.toggleAgregarHabilidad();

  }
}
