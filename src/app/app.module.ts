import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IndexUsuarioComponent } from './components/usuario/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './components/usuario/edit-usuario/edit-usuario.component';
import { IndexPacienteComponent } from './components/paciente/index-paciente/index-paciente.component';
import { EditPacienteComponent } from './components/paciente/edit-paciente/edit-paciente.component';
import { CreatePacienteComponent } from './components/paciente/create-paciente/create-paciente.component';
import { SidebarComponent } from './components/menu/sidebar/sidebar.component';
import { TopnavComponent } from './components/menu/topnav/topnav.component';

import { routing } from './app.routing';

import { NgbModule, NgbPaginationModule,NgbDropdown  } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTinymceModule  } from 'ngx-tinymce';
import { NgxFileDropModule } from 'ngx-file-drop';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/menu/footer/footer.component';
import { RoleuserComponent } from './components/roleuser/roleuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexUsuarioComponent,
    CreateUsuarioComponent,
    EditUsuarioComponent,
    IndexPacienteComponent,
    EditPacienteComponent,
    CreatePacienteComponent,
    SidebarComponent,
    TopnavComponent,
    InicioComponent,
    FooterComponent,
    RoleuserComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule, NgbPaginationModule,NgbDropdown,
    FormsModule, ReactiveFormsModule,
    NgxTinymceModule.forRoot({
      //baseURL: './assets/tinymce/',
      // or cdn
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/5.7.1/'
    }),NgxFileDropModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
