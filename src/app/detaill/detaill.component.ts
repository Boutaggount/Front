import { Component, OnInit } from '@angular/core';
import { Hackaton } from '../model/Hackaton';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { MatDialog } from '@angular/material';
import { UpdateEventComponent } from '../update-event/update-event.component';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TestComponent } from '../test/test.component';


@Component({
  selector: 'app-detaill',
  templateUrl: './detaill.component.html',
  styleUrls: ['./detaill.component.css']
})
export class DetaillComponent implements OnInit {
  tab: Hackaton;
  var:boolean=false;
  
  constructor(private dialog: MatDialog,private _serv:GestionHackatonService,private _router:Router) { }

  ngOnInit() {
    this.tab=this._serv.getHck();

  }
  update() {
    this._serv.setHack(this.tab);
    this.var=true;
    
  }
  navList(){
    this._router.navigate(["listEvent"])
  }
  isAdmin(){
    if(sessionStorage.getItem("type")=="admin"){
      return true
    }else return false;
  }
  ismembre(){
    if(sessionStorage.getItem("type")=="membre"){
      return true
    }else return false;
  }
  participer(){
    
    if(sessionStorage.getItem("type")=="membre"){
      let a = sessionStorage.getItem('id_hack');
      let b = sessionStorage.getItem('id_membre');
      this._serv.ispart(b,a).subscribe(x=>{
        if(x)
         {alert("vous avez déja pqrticiper")}
          else
          {this._router.navigate(["Demande"])
            this.dialog.closeAll();    
        }
      });   
      
      
      
    }else{
      this.dialog.open(AuthentificationComponent);
    }
  }
  /*
  ispart(){
    if(sessionStorage.getItem("type")=="membre"){
      let a = sessionStorage.getItem('id_hack');
      let b = sessionStorage.getItem('id_membre');
      if(this._serv.ispart(b,a)){return true}
      else {return false} 
  }
  */
 onSubmit(f:NgForm){
  this._serv.update(this.tab);
  this.var=false
}
test(){
  console.log("hey");
  return true;
}
getV(){
  return this.var;
}

confirm(){
  var c = confirm("vous voulez vraiment suprimer le hackathone?");  
  if(c){
    let id=parseInt(sessionStorage.getItem('id_hack'))
    this._serv.deleteEvent(id)

  }
}
}
