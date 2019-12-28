import { Injectable } from '@angular/core';

import { HttpClient, HttpParams} from '@angular/common/http';


import { Hackaton } from '../model/Hackaton'
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class GestionHackatonService {
  private baseUrl: String = 'http://localhost:8090/evenements/';
  private Hackatons: Hackaton;
  private Hack: Hackaton;
  
  getHck(){
    return this.Hackatons;
  }
  setHack(hack:Hackaton){
    this.Hackatons=hack;
  }

  constructor(private _http: HttpClient, private _router: Router,private dialog: MatDialog) { }

  getAll() {
    return this._http.get(this.baseUrl + 'all');
  }
  getId() {
    
    return this._http.get(this.baseUrl + '' + sessionStorage.getItem('ident'));
  }
  add(hack: Hackaton) {
    return this._http.post(this.baseUrl + 'save', JSON.parse(JSON.stringify(hack))
    ).subscribe(response => { console.log(response); });
   
  }
  participer(a:string,b:string){
  let params = new HttpParams().set("id_membre",a).set("id_Hackaton",b);
  /*let m=new Map<String,String>();
  m.set("id_membre","ok");
  m.set("id_Hackaton","tght");*/
  console.log(params);
  this._http.post(this.baseUrl+'participer',params).subscribe(rep=>{ });
  
  }

  ispart(a:string,b:string){
    let params = new HttpParams().set("id_membre",a).set("id_Hackaton",b);
   
    /*let m=new Map<String,String>();
    m.set("id_membre","ok");
    m.set("id_Hackaton","tght");*/
 
    return this._http.post(this.baseUrl+'ispart',params);
    }
   deleteEvent(id:number){
    
    this._http.post(this.baseUrl+'delete/',id).subscribe(rep=>{console.log(rep)});
    this.dialog.closeAll();
    this._router.navigate(['test']);
    

    
 }
}