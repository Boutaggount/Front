import { Component, OnInit } from '@angular/core';
import {Hackaton} from '../model/Hackaton'
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  hachaton:Hackaton;
  hachaton_in:Hackaton[]=[];
  
  constructor(private _serv:GestionHackatonService,private _router:Router) { }

  ngOnInit() {

    this._serv.getAll().subscribe((data:Hackaton[])=>(this.hachaton_in=data));
    
  }
  onSubmit(f:NgForm){
    this.hachaton=new Hackaton;
    this.hachaton.intitule=f.value['intitule'];
    this.hachaton.description=f.value['Description'];
    this.hachaton.theme=f.value['theme'];
    this.hachaton.capacite=f.value['Capacite'];
    this.hachaton.ville=f.value['Ville'];
    this.hachaton.address=f.value['address'];
    this.hachaton.date_debut=f.value['Datedebut'];
    this.hachaton.date_fin=f.value['DateFin'];
    this.hachaton.etablisement=f.value['Etablisement'];
    this.hachaton.nbr=f.value['nbrequipe'];
    this.hachaton.eqestcreer=false;
    this._serv.add(this.hachaton);
    this._router.navigate(["listEvent"]);

  }
  addEvent(){
    
    console.log(this.hachaton)
    this._serv.add(this.hachaton)
    //this.ngOnInit();
  }

}
