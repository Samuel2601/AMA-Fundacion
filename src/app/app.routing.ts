import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from '../app/guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { IndexUsuarioComponent } from './components/usuario/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './components/usuario/edit-usuario/edit-usuario.component';
import { IndexPacienteComponent } from './components/paciente/index-paciente/index-paciente.component';
import { EditPacienteComponent } from './components/paciente/edit-paciente/edit-paciente.component';
import { CreatePacienteComponent } from './components/paciente/create-paciente/create-paciente.component';
import { SidebarComponent } from './components/menu/sidebar/sidebar.component';
import { TopnavComponent } from './components/menu/topnav/topnav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RoleuserComponent } from './components/roleuser/roleuser.component';
const appRoute: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },

	{ path: 'login', component: LoginComponent },
	{ path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
	{ path: 'beneficiario', component: IndexPacienteComponent, canActivate: [AuthGuard] },
	{
		path: 'beneficiario/create',
		component: CreatePacienteComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'beneficiario/edit/:id',
		component: EditPacienteComponent,
		canActivate: [AuthGuard],
	},
	
	{ path: 'usuario', component: IndexUsuarioComponent, canActivate: [AuthGuard] },
	{
		path: 'usuario/create',
		component: CreateUsuarioComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'usuario/edit/:id',
		component: EditUsuarioComponent,
		canActivate: [AuthGuard],
	},
	{ path: 'privilegio', component: RoleuserComponent, canActivate: [AuthGuard] },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);
