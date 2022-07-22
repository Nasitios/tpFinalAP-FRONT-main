import { Component, OnInit } from '@angular/core';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  faEntrar = faDungeon;
  nuevoUsuario!: Usuario;

  nombre: string = "";
  nombreUsuario: string = "";
  email: string = "";
  password: string = "";
  errMsj: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  creandoCuenta(): void {
    this.nuevoUsuario = new Usuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevoUsuario(this.nuevoUsuario).subscribe({
      next:()=> {
        location.reload();
      },
      error:(err: any) => {
        this.errMsj = err.error.message;
        location.reload();
      }
    })

  }

}
