import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { equipe } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private courantEq:string;
  private baseUrl: String = 'http://localhost:8090/equipes/';
  constructor(private _http: HttpClient, private _router: Router) { }

  add(eq: equipe,tab:string[],N:number) {
    
  this._http.post(this.baseUrl + 'save', JSON.parse(JSON.stringify(eq))
    ).subscribe((response:string) => {  
      for(var i=0;i<N;i++){
        this.addmember(tab[i],response)
      }
      let params = new HttpParams().set("id_eq", response).set("id_hack", sessionStorage.getItem('id_hack'));
     this._http.post(this.baseUrl + 'save2', params
      ).subscribe((response2:string) => { } );
      
    });
   
    
  }

  addmember(a:string,b:string){
    
    let params = new HttpParams().set("id_membre", a).set("id_eq",b);
      this._http.post(this.baseUrl + 'addmembre', params
      ).subscribe(response => { });
   
  }
  mesEquipe(id:Number){
    return this._http.get(this.baseUrl + 'mesEquipe/'+id);
  }
  membreParEquipes(id:Number){
    return this._http.get(this.baseUrl + 'membreParEquipes/'+id);
  }
}
