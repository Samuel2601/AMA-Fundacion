import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import iziToast from 'izitoast';
@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css']
})
export class IndexUsuarioComponent implements OnInit{
 public usuarios = localStorage.getItem('usuarios');
 public arr_usuarios:Array<any> = [];
 public usuarios_const: Array<any> = [];
 public load_eliminados = false;
 public total=0;
 public filtro='';
 public load_data_user=true;
 public page = 1;
 public pageSize = 10;
 ngOnInit(): void {
  this.load_data_user = true;
      if(this.usuarios){
        this.usuarios_const=JSON.parse(this.usuarios);
        this.usuarios_const.forEach((element:any) => {
					
						this.arr_usuarios.push({ ckechk: 0, element });
					
				});
        console.log(this.arr_usuarios);
        console.log(this.usuarios_const);
        
        this.load_data_user=false;
      }
    }
    mostrar_eliminado() {
      this.total = 0;
      this.load_data_user = true;
      this.load_eliminados = true;
      this.arr_usuarios = [];
      this.usuarios_const.forEach((element) => {
        if (element.estado == 'Desactivado') {
          //////console.log(element.estado)
          this.arr_usuarios.push({ ckechk: 0, element });
        }
      });
      this.load_data_user = false;
      //this.recarga();
    }
    mostrar_normales() {
      this.total = 0;
      this.load_data_user = true;
      this.load_eliminados = false;
      this.arr_usuarios = [];
      this.usuarios_const.forEach((element) => {
        if (element.estado != 'Desactivado' && element.estado != undefined) {
          //////console.log(element.estado)
          this.arr_usuarios.push({ ckechk: 0, element });
        }
      });
      this.load_data_user = false;
      //this.recarga();
    }
    public tpfiltro:any='id_usuario';
	filtrar_estudiante() {
		this.load_data_user = true;
		this.arr_usuarios = [];
		var aux = this.filtro;
		if(this.filtro&&this.tpfiltro){
			var term = new RegExp(this.filtro.toString().trim(), 'i');
			this.usuarios_const.forEach((element) => {				
					this.arr_usuarios.push({ ckechk: 0, element });	
			});
			this.arr_usuarios = this.arr_usuarios.filter(
				(item:any) =>term.test(item.element[this.tpfiltro])
			);
		}else{
			this.usuarios_const.forEach((element) => {				
				this.arr_usuarios.push({ ckechk: 0, element });	
			});
		}
		this.filtro = aux;
		this.load_data_user = false;
	}
	contarUsuariosSeleccionados(): number {
		let contador = 0;
		for (const usuario of this.arr_usuarios) {
		  if (usuario.ckechk == 1) {
			contador++;
		  }
		}
		return contador;
	  }
	eliminar(id: any) {
		iziToast.show({
      title: 'SUCCESS',
      titleColor: '#1DC74C',
      color: '#FFF',
      class: 'iziToast-success',
      position: 'topRight',
      message: 'usuario eliminados ',
    });

    $('#delete-' + id).modal('hide');
    $('.modal-backdrop').removeClass('show');
	}
	eliminar_todo() {
		//this.load_data_user = true;
		//this.load_data_user=true;
		//////console.log(id);
		var con = 0;
		let contador = this.contarUsuariosSeleccionados();

		this.arr_usuarios = this.arr_usuarios.filter(usuario => usuario.ckechk != 1);
		console.log(this.arr_usuarios,contador);

		iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'iziToast-success',
            position: 'topRight',
            message: 'Se eliminó correctamente uno o varios usuarios:' + '(' + contador + ')',
          });
          this.total = 0;
          this.load_eliminados = false;
		  this.load_data_user = false;
		$('#delete-todo').modal('hide');
		//$('.modal-backdrop').removeClass('show');
		//location.reload();
	}
	select_todo() {
		if (this.total == 1) {
			this.arr_usuarios.forEach((element: any) => {
				element.ckechk = 0;
			});
		} else {
			this.arr_usuarios.forEach((element: any) => {
				element.ckechk = 1;
			});
		}
	}
	activar_todo() {
		this.load_data_user = true;
		//this.load_data_user=true;
		//////console.log(id);
		var con = 0;
		let ultimo = 0;
		this.arr_usuarios.forEach((element:any) => {
			if (element.ckechk == 1) {
				ultimo++;
			}
		});
		////console.log(ultimo);
		this.arr_usuarios.forEach((element: any) => {
			if (element.ckechk == 1) {
				  con++;
						if (con == ultimo) {
						}
						iziToast.show({
							title: 'SUCCESS',
							titleColor: '#1DC74C',
							color: '#FFF',
							class: 'iziToast-success',
							position: 'topRight',
							message: 'Se activo correctamente el estudiante.' + '(' + con + ')',
						});
						this.total = 0;
						this.load_eliminados = false;
						//this.recarga();
			}
		});
		$('#activar-todo').modal('hide');
		$('.modal-backdrop').removeClass('show');
		location.reload();
	}

	activar(id: any) {
		iziToast.show({
      title: 'SUCCESS',
      titleColor: '#1DC74C',
      color: '#FFF',
      class: 'iziToast-success',
      position: 'topRight',
      message: 'Se activado correctamente el estudiante.',
    });

    $('#delete-' + id).modal('hide');
    $('.modal-backdrop').removeClass('show');
    this.mostrar_normales();
    location.reload();
	}
}
