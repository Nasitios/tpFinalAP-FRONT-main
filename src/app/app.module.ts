import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { interceptorProvider } from './interceptor/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EspacioComponent } from './components/acercade/espacio/espacio.component';
import { EspaItemComponent } from './components/acercade/espa-item/espa-item.component';
import { BotonEspaComponent } from './components/acercade/boton-espa/boton-espa.component';
import { AgregarEspaComponent } from './components/acercade/agregar-espa/agregar-espa.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { AgregarPerComponent } from './components/cabecera/agregar-per/agregar-per.component';
import { BotonPerComponent } from './components/cabecera/boton-per/boton-per.component';
import { PerItemComponent } from './components/cabecera/per-item/per-item.component';
import { PerfilesComponent } from './components/cabecera/perfiles/perfiles.component';
import { AgregarEduComponent } from './components/educacion/agregar-edu/agregar-edu.component';
import { BotonEduComponent } from './components/educacion/boton-edu/boton-edu.component';
import { EduItemComponent } from './components/educacion/edu-item/edu-item.component';
import { EducacionesComponent } from './components/educacion/educaciones/educaciones.component';
import { AgregarExpeComponent } from './components/experiencia/agregar-expe/agregar-expe.component';
import { BotonExpeComponent } from './components/experiencia/boton-expe/boton-expe.component';
import { ExpeItemComponent } from './components/experiencia/expe-item/expe-item.component';
import { ExperienciasComponent } from './components/experiencia/experiencias/experiencias.component';
import { AgregarHabiComponent } from './components/hys/agregar-habi/agregar-habi.component';
import { BotonHabiComponent } from './components/hys/boton-habi/boton-habi.component';
import { HabiItemComponent } from './components/hys/habi-item/habi-item.component';
import { HabilidadesComponent } from './components/hys/habilidades/habilidades.component';
import { AgregarProComponent } from './components/proyecto/agregar-pro/agregar-pro.component';
import { BotonProComponent } from './components/proyecto/boton-pro/boton-pro.component';
import { ProItemComponent } from './components/proyecto/pro-item/pro-item.component';
import { ProyectosComponent } from './components/proyecto/proyectos/proyectos.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './section/login/login.component';
import { RegistroComponent } from './section/login/registro/registro.component';
import { HomeComponent } from './section/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    AcercadeComponent,
    EspacioComponent,
    EspaItemComponent,
    BotonEspaComponent,
    AgregarEspaComponent,
    CabeceraComponent,
    AgregarPerComponent,
    BotonPerComponent,
    PerItemComponent,
    PerfilesComponent,
    AgregarEduComponent,
    BotonEduComponent,
    EduItemComponent,
    EducacionesComponent,
    AgregarExpeComponent,
    BotonExpeComponent,
    ExpeItemComponent,
    ExperienciasComponent,
    AgregarHabiComponent,
    BotonHabiComponent,
    HabiItemComponent,
    HabilidadesComponent,
    AgregarProComponent,
    BotonProComponent,
    ProItemComponent,
    ProyectosComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
