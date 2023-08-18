import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import iziToast from 'izitoast';
declare var $: any;
@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit{
  public usuario:any={};
  public load_data_user=false;
  public load_btn=false;
  constructor(private _route: ActivatedRoute,private _router: Router){

  }
  ngOnInit(): void {
    this.load_data_user=false;
    this.load_data_user=true;
  }
  crear(loginForm:any){

  }
}
