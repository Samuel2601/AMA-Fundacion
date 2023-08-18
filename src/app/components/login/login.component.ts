import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import iziToast from 'izitoast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private _router: Router) {
	}
  public admin={email:'',password:''};
  ngOnInit(): void {
	
	if(localStorage.getItem('token')){
		this._router.navigate(['/inicio']);
	}else if(!localStorage.getItem('usuarios')){
		location.reload();
	}
  } 
  login(loginForm: any){
    if (loginForm.valid) {
      let email = loginForm.value.email;
	  let password = loginForm.value.password;

		if (email == '' && password == '') {
			iziToast.error({
				title: 'ERROR DATA',
				position: 'topRight',
				message: 'Todos los campos son requeridos, vuelva a intentar.',
			});
		} else {
			let usuarios = localStorage.getItem('usuarios');
			usuarios=JSON.parse(usuarios||'');
			if (Array.isArray(usuarios)) {
				var usuarioEncontrado = usuarios.find(function(usuario:any) {
					return usuario.Correo === email && usuario.Contraseña === password;
				  });
				  
				  if (usuarioEncontrado) {
					localStorage.setItem('data_admin', JSON.stringify(usuarioEncontrado));
					localStorage.setItem('token', JSON.stringify(usuarioEncontrado));
					this._router.navigate(['/inicio']);
				  } else {
					iziToast.warning({
						title: 'ERROR',
						position: 'topRight',
						message: 'Usuario o contraseña no coninciden',
					});
				  }
			}
      	}
    }
  }

  view_password() {
		let type = $('#password').attr('type');

		if (type == 'text') {
			$('#password').attr('type', 'password');
		} else if (type == 'password') {
			$('#password').attr('type', 'text');
		}
	}
}
