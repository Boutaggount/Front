import { Component, OnInit } from '@angular/core';
import { Membre } from '../model/Membre';
import {NgForm} from '@angular/forms'
import { MemberService } from '../Services/member.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-membre',
  templateUrl: './new-membre.component.html',
  styleUrls: ['./new-membre.component.css']
})
export class NewMembreComponent implements OnInit {
  membre:Membre;
  tstpwd:String;
  constructor(private _serv:MemberService,private _router:Router,private dialog:MatDialog) { }

  ngOnInit() {
  }
  onSubmit(f:NgForm){
    this.membre=new Membre;
    this.membre.nom=f.value['nom'];
    this.membre.prenom=f.value['prenom'];
    this.membre.pwd=f.value['mdp'];
    this.tstpwd=f.value['mdp2'];
    this.membre.sexe=f.value['gender'];
    this.membre.email=f.value['email'];
    this.membre.num=f.value['Phone'];
    this.membre.qust=f.value['qust'];
    this.membre.rep=f.value['rep'];
    this.membre.login=f.value['login'];
    this.membre.adresse=f.value['adr'];
    this._serv.add(this.membre);
    this.dialog.closeAll();
    
    console.log(this.membre);
    

  }

}
