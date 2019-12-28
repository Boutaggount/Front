import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css']
})
export class VerticalBarComponent implements OnInit {
  
  constructor(_serv:AuthentificationService) { }

  ngOnInit() {

  }
  connected() {
    if ( sessionStorage.getItem('type') == "Admin") {return true }
    else return false;
    
  }
  isAdmin(){
    if(sessionStorage.getItem("type")=="admin"){
      return true
    }else return false;
  }
}
