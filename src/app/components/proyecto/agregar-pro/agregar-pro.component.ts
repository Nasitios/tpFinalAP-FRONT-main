import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-pro',
  templateUrl: './agregar-pro.component.html',
  styleUrls: ['./agregar-pro.component.css']
})
export class AgregarProComponent implements OnInit {

  @Output() onAgregarProyecto: EventEmitter<FormData> = new EventEmitter();

  titulo: string = "";
  descripcion: string = "";
  link: string = "";

  abrirProyecto: boolean = false;
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
      descripcion: new FormControl,
      link: new FormControl
    })

    this.aderir = this.uiService.onToggleProyecto()
          .subscribe(value => this.abrirProyecto = value)
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

    this.onAgregarProyecto.emit(formData);
    this.abrirProyecto = false;
    this.uiService.toggleAgregarProyecto();

  }

}
