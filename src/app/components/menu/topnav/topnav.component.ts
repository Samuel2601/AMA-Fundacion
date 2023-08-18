import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  constructor(private _router: Router) {}
    public user:any;
    ngOnInit(): void {
      this.user=JSON.parse(localStorage.getItem('data_admin')||'');
      console.log(this.user);
    }
    salir(){
      localStorage.clear();
			this._router.navigate(['login']);
    }
}
