import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import iziToast from 'izitoast';
declare var $: any;
@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit{
  public id: any;
  public usuario:any;
  public load_data_user=false;
  public rol='';
  //public idp='';
  public load_btn=false;
  public arr_pro:Array<any>=[];
  public arr_ciud:Array<any>=[];
  public arr_ciud_const:Array<any>=[];
  constructor(private _adminService: AdminService,private _route: ActivatedRoute,private _router: Router){

  }
  ngOnInit(): void {
    this.load_data_user=false;
    this.llamar_pro();
  }
llamar_pro(){
  this._adminService.getprovincia().subscribe((response)=>{
    if(response){   
      this.arr_pro=response.provincias;
      this._adminService.getciudad().subscribe((response)=>{
        if(response){
          this.arr_ciud=response.ciudades;
          this.arr_ciud_const=this.arr_ciud;
          this.cargar_datos();
        }
      });
    }
  });
}
filtrarCiudad(selectedProvincia: string) {
  this.usuario.Ciudad='';

   const provinciaSeleccionada = this.arr_pro.find(provincia => provincia.nombre === selectedProvincia);

   if (provinciaSeleccionada) {
     const ciudadesFiltradas = this.arr_ciud_const.filter(ciudad => ciudad.id_provincia === provinciaSeleccionada.id);
 
     this.arr_ciud = ciudadesFiltradas; 
    } else {
     this.arr_ciud = [];
   }
}
cargar_datos(){
  this._route.params.subscribe((params) => {
    this.id = params['id'];
    //console.log(this.id);
    let aux_admin=JSON.parse(localStorage.getItem('data_admin')||'');
    if(aux_admin!=''){
      //this.idp=aux_admin.id_paciente;
      if(aux_admin.fk_idrol==1){
        this.rol='admin';
      }
      
    }
    let aux_usuario=JSON.parse(localStorage.getItem('pacientes')||'');
    if(aux_usuario!=''&&Array.isArray(aux_usuario)){
      this.usuario= aux_usuario.find((element:any)=>{
        if(element.id_paciente==this.id){
          return element
        }
      });
      console.log(this.usuario,this.arr_ciud,this.arr_pro);
      this.load_data_user=true;
    }
  });
}
actualizar(updateForm: { valid: any }) {}
}
