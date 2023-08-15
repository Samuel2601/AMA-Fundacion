import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard  {
	constructor(private _router: Router, private _adminService: AdminService) {}

	canActivate(): any {
		let access: any = localStorage.getItem('token');//this._adminService.isAuthenticate();
		
		if (!access) {
			localStorage.clear();
			this._router.navigate(['login']);
		}
		return true;
	}
}
