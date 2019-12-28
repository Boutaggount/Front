import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user:String="user"
  login:String;


  constructor(private _http: HttpClient, private _router: Router) { }

  connect(a:String,b:String){
    this.user=b;
    this.login=a;
  }
  isAdmin(){
    if(this.user=="A"){return true}
  }
  isMembre(){
    if(this.user=="M"){return true}
  }
}
