import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var iziToast: {
	show: (arg0: {
		title: string;
		titleColor: string;
		color: string;
		class: string;
		position: string;
		message: string;
	}) => void;
};
@Component({
  selector: 'app-index-paciente',
  templateUrl: './index-paciente.component.html',
  styleUrls: ['./index-paciente.component.css']
})
export class IndexPacienteComponent implements OnInit{
  public usuarios = localStorage.getItem('pacientes');
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
      
    filtrar_estudiante() {
      this.load_data_user = true;
      this.arr_usuarios = [];
      var aux = this.filtro;
      if (this.filtro) {
        if (this.filtro.length <= 2) {
          this.filtro = "'" + this.filtro + "'";
        }
        var term = new RegExp(this.filtro.toString().trim(), 'i');
        if (this.load_eliminados) {
          this.usuarios_const.forEach((element) => {
            if (element.estado == 'Desactivado') {
              //////console.log(element.estado)
              this.arr_usuarios.push({ ckechk: 0, element });
            }
          });
        } else {
          this.usuarios_const.forEach((element) => {
            if (element.estado != 'Desactivado' && element.estado != undefined) {
              //////console.log(element.estado)
              this.arr_usuarios.push({ ckechk: 0, element });
            }
          });
        }
  
        this.arr_usuarios = this.arr_usuarios.filter(
          (item:any) =>
          term.test((item.element.curso).toString()+'-'+(item.element.paralelo).toString()+' '+item.element.genero) ||
          term.test((item.element.curso).toString()+'-'+(item.element.paralelo).toString()) ||
            term.test(item.element.nombres) ||
            term.test("'" + item.element.curso + "'") ||
            term.test("'" + item.element.paralelo + "'") ||
            term.test(item.element.genero) ||
            term.test(item.element.apellidos) ||
            term.test(item.element.email) ||
            
            term.test(item.element.dni) ||
            term.test(item.element.telefono) ||
            term.test(item.element._id)||
            term.test(item.element.createdAt)||
            term.test(item.element.email_padre)
        );
      } else {
        if (this.load_eliminados) {
          this.usuarios_const.forEach((element) => {
            if (element.estado == 'Desactivado') {
              //////console.log(element.estado)
              this.arr_usuarios.push({ ckechk: 0, element });
            }
          });
        } else {
          this.usuarios_const.forEach((element) => {
            if (element.estado != 'Desactivado' && element.estado != undefined) {
              //////console.log(element.estado)
              this.arr_usuarios.push({ ckechk: 0, element });
            }
          });
        }
      }
      this.filtro = aux;
      this.load_data_user = false;
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
          if (con == ultimo) {
            iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'iziToast-success',
              position: 'topRight',
              message: 'Se eliminó correctamente el(los) estudiante.' + '(' + con + ')',
            });
            this.total = 0;
            this.load_eliminados = true;
            //this.recarga();
            ////console.log("Fin1");
          }
        }
      });
      $('#delete-todo').modal('hide');
      $('.modal-backdrop').removeClass('show');
      location.reload();
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
