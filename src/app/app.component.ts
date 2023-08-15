import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './service/admin.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public rol: any;
	public estado: any;
	//public token = localStorage.getItem('token');
	public geo = localStorage.getItem('geo');

	title = 'admin';
	constructor(private _adminService: AdminService, private _router: Router) {}

  ngOnInit(): void {
		if(!localStorage.getItem('pacientes')||!localStorage.getItem('usuarios')){
			this._adminService.getbase().subscribe((response)=>{
				console.log(response);
				if(response.pacientes){
					localStorage.setItem('pacientes', JSON.stringify(response.pacientes));
				}
				if(response.usuarios){
					localStorage.setItem('usuarios', JSON.stringify(response.usuarios));
				}
			});
		}
		
		if (this.geo == null) {
			this._adminService.obtener_ip_admin().subscribe((response) => {
				localStorage.setItem('geo', JSON.stringify(response));
					///  console.log(localStorage.setItem('geo',JSON.stringify(response)));
					window.location.reload();
			});
		}
	}
}
