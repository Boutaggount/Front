import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Demande } from '../model/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private courantEq:string;
  private demade:Demande;
  private baseUrl: String = 'http://localhost:8090/demandes/';
  constructor(private _http: HttpClient, private _router: Router) { }

  add(dem:Demande){
    this._http.post(this.baseUrl + 'save', JSON.parse(JSON.stringify(dem))
    ).subscribe((response:string) => {  
      
      let params = new HttpParams().set("id_demande", response).set("id_Hackaton", sessionStorage.getItem('id_hack'));
     this._http.post(this.baseUrl + 'save2', params
      ).subscribe(() => { 
        let params = new HttpParams().set("id_demande", response).set("id_membre", sessionStorage.getItem('id_membre'));
     this._http.post(this.baseUrl + 'save3', params
      ).subscribe(() => { } );
      } );
      
    });
   
  }
  maDemande(idM:string,idH:string){
    let params = new HttpParams().set("id_Hackaton", idH).set("id_membre", idM);
     return this._http.post(this.baseUrl + 'maDemande', params
      )
  }
  
  annuler(id:Number){
    this._http.post(this.baseUrl + 'Annuler', id).subscribe(()=>{})
  }

}
