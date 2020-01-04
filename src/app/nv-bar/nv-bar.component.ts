import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthentificationComponent } from '../authentification/authentification.component';
import { MatDialog } from "@angular/material";

import { NewMembreComponent } from '../new-membre/new-membre.component';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-nv-bar',
  templateUrl: './nv-bar.component.html',
  styleUrls: ['./nv-bar.component.css']
})
export class NvBarComponent implements OnInit {

  type: String;
  nom:String="";
  constructor(private dialog: MatDialog, private _serv: AuthentificationService,private _router:Router) { }

  ngOnInit() {
   
  }

  openD() {
    this.dialog.open(NewMembreComponent)
    
  }
  openD2() {
    this.dialog.open(AuthentificationComponent, {
      height: '600px',
      width: '600px',
    });
  }
  connected() {
    if ( sessionStorage.getItem('type') == "membre" || sessionStorage.getItem('type') == "admin") {
      this.nom=sessionStorage.getItem('nom'); 
      return true }
    else return false;
    
  }
  deconnected() {
    sessionStorage.clear();
    this._router.navigate(['']);
    this.nom="";
  }


}

