import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit{
  public usuario:any;
  public load_btn=false;
  constructor(){

  }
  ngOnInit(): void {
    
  }
  crear(loginForm:any){

  }
}
