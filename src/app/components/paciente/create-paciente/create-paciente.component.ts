import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import iziToast from 'izitoast';
declare var $: any;
@Component({
  selector: 'app-create-paciente',
  templateUrl: './create-paciente.component.html',
  styleUrls: ['./create-paciente.component.css']
})
export class CreatePacienteComponent implements OnInit {
  public usuario:any={
    Nombres:'',
    Apellidos:''
  };
  public load_btn=false;  
  public load_data_user=false;
  public arr_pro:Array<any>=[];
  public arr_ciud:Array<any>=[];
  public arr_ciud_const:Array<any>=[];
  constructor(private _adminService: AdminService,private _route: ActivatedRoute,private _router: Router){

  }
  ngOnInit(): void {
    this.load_data_user=false;
    this.llamar_pro();
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
  llamar_pro(){
    this._adminService.getprovincia().subscribe((response)=>{
      if(response){   
        this.arr_pro=response.provincias;
        this._adminService.getciudad().subscribe((response)=>{
          if(response){
            this.arr_ciud=response.ciudades;
            this.arr_ciud_const=this.arr_ciud;
            //this.cargar_datos();
            this.load_data_user=true;
          }
        });
      }
    });
  }
  crear(updateForm:any){

  }
}
