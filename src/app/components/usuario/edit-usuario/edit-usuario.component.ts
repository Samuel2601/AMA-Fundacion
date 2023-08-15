import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import iziToast from 'izitoast';
declare var $: any;
@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit{
  public id: any;
  public usuario:any;
  public load_data_user=false;
  public rol='';
  public idp='';
  public load_btn=false;
  constructor(private _route: ActivatedRoute,private _router: Router){

  }
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
			this.id = params['id'];
      console.log(this.id);
      let aux_admin=JSON.parse(localStorage.getItem('data_admin')||'');
      if(aux_admin!=''){
        this.idp=aux_admin.id_usuario;
        if(aux_admin.fk_idrol==1){
          this.rol='admin';
        }
        
      }
      let aux_usuario=JSON.parse(localStorage.getItem('usuarios')||'');
      if(aux_usuario!=''&&Array.isArray(aux_usuario)){
        this.usuario= aux_usuario.find((element:any)=>{
          if(element.id_usuario==this.id){
            return element
          }
        });
        console.log(this.usuario);
      }
    });
    console.log(this.usuario,this.rol,this.idp);
  }
  actualizar(updateForm: { valid: any }) {}
}
