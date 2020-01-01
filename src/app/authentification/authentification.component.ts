import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {MemberService} from '../../app/Services/member.service'
import { Membre } from '../model/Membre';
import { AuthentificationService } from '../Services/authentification.service';
import { AdminService } from '../Services/admin.service';
import { Administrateur } from '../model/Administrateur';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  nom:String
  mdp:String
  type:String
  members:Membre[]=[]
  admins:Administrateur[]=[]
  constructor(private dialog: MatDialog,private _serv:MemberService,private _Athen:AuthentificationService,private _servA:AdminService) { }

  ngOnInit() {
    this._serv.getAll().subscribe((data:Membre[])=>(this.members=data));
    this._servA.getAll().subscribe((data:Administrateur[])=>(this.admins=data));
  }

  onSubmit(f:NgForm){
    this.nom=f.value['login']
    this.mdp=f.value['pwd']
    this.type=f.value['gender'] 
    var a=1;
    //if membre
    if(this.type=="membre"){
      for(var i=0;i<this.members.length;i++){
        if(this.members[i].login==this.nom && this.members[i].pwd==this.mdp){
          a=2;
          sessionStorage.setItem('type',"membre");
          sessionStorage.setItem('id_membre',this.members[i].id_mem.toString())
          sessionStorage.setItem('nom',this.members[i].login.toString())
          this.dialog.closeAll();
        }
       
      }
      if(a==1){alert('error log ou mdp')}
    }
    //if admin
    if(this.type=="admin"){
      for(var i=0;i<this.admins.length;i++){
        if(this.admins[i].login==this.nom && this.admins[i].pwd==this.mdp){
          a=2;
         // this._Athen.connect(this.nom,"A");
         sessionStorage.setItem('type',"admin");
         sessionStorage.setItem('id_admin',this.admins[i].id_admin.toString())
         sessionStorage.setItem('nom',this.admins[i].login.toString())
         this.dialog.closeAll();
        }
       
      }
      if(a==1){alert('error log ou mdp')}

    }
    
  }

}
