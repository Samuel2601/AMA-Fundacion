import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public url;
  constructor(private _http: HttpClient) { 
    this.url = '';
  }
  getbase():Observable<any>{
		return this._http.get('./assets/claves.json')
	}
	getprovincia():Observable<any>{
		return this._http.get('./assets/provincias.json')
	}
	getciudad():Observable<any>{
		return this._http.get('./assets/ciudades.json')
	}
  obtener_ip_admin(): Observable<any> {
		return this._http.get('https://api.ipify.org/?format=json');
	}
  isAuthenticate() {
	/*
		const token: any = localStorage.getItem('token');

		try {
			const helper = new JwtHelperService();
			var decodedToken = helper.decodeToken(token);

			if (!token) {
				localStorage.clear();
				return false;
			}

			if (!decodedToken) {
				localStorage.clear();
				return false;
			}

			if (helper.isTokenExpired(token)) {
				localStorage.clear();
				return false;
			}
		} catch (error) {
			//console.log(error);

			localStorage.clear();
			return false;
		}*/
		return false;
		//return true;
	}
}
