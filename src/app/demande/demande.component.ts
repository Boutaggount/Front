import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Demande } from '../model/Demande';
import { DemandeService } from '../Services/demande.service';
import { Router } from '@angular/router';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Membre } from '../model/Membre';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demande:Demande;
  
 
  
  constructor(private _serv:DemandeService,private _servH:GestionHackatonService,private _router:Router) { 
    
  }

  ngOnInit() {
  }
  onSubmit(f:NgForm){
    
    this.demande=new Demande();
    this.demande.niveau=f.value["niveau"];
    this.demande.motivation=f.value["message"];
    this.demande.dep=f.value["domaine"];
    this._serv.add(this.demande);
    this._servH.demande();
    this._router.navigate(["listEvent"])
   
  }

}
