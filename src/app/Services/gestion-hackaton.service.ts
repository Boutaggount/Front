import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Hackaton } from '../model/Hackaton'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class GestionHackatonService {
  private baseUrl: String = 'http://localhost:8090/evenements/';
  private Hackatons: Hackaton;
  private bienDemnd=false;


  getHck() {
    return this.Hackatons;
  }
  setHack(hack: Hackaton) {
    this.Hackatons = hack;
  }

  constructor(private _http: HttpClient, private _router: Router, private dialog: MatDialog) { }

  getAll() {
    return this._http.get(this.baseUrl + 'all');
  }
  getId(id:Number) {

    return this._http.get(this.baseUrl + '' + id);
  }
  getNbMembersH(){
    return this._http.get(this.baseUrl + 'nbMemebersH');
  }
  getNbMembersF(){
    return this._http.get(this.baseUrl + 'nbMemebersF');
  }
  getNbHackatons(){
    return this._http.get(this.baseUrl + 'nbHackaton');
  }

  getNbEquipe(){
    return this._http.get(this.baseUrl + 'nbEquipe');
  }

  getNbDemande(){
    return this._http.get(this.baseUrl + 'nbDemande');
  }


  getNbPArticipants(){
    return this._http.get(this.baseUrl + 'nbParticipants');
  }
  add(hack: Hackaton) {
    
    this._http.post(this.baseUrl + 'save', JSON.parse(JSON.stringify(hack))
    ).subscribe((response: string) => {
      
      let params = new HttpParams().set("evnt", response).set("id_Admin", sessionStorage.getItem('id_admin'));
      this._http.post(this.baseUrl + 'save2', params
      ).subscribe(response => { });
      
    });
    
  }
  update(hack: Hackaton) {
    
    this._http.post(this.baseUrl + 'update', JSON.parse(JSON.stringify(hack))
    ).subscribe(() => {});
    
  }
  changeEtat(){

  }
  participer(a: string, b: string) {
    let params = new HttpParams().set("id_membre", a).set("id_Hackaton", b);
    this._http.post(this.baseUrl + 'participer', params).subscribe(rep => { });

  }


  ispart(a: string, b: string) {
    let params = new HttpParams().set("id_membre", a).set("id_Hackaton", b);
    return this._http.post(this.baseUrl + 'ispart', params);
  }
  deleteEvent(id: number) {
    this._http.post(this.baseUrl + 'delete/', id).subscribe(rep => { console.log(rep) });
    this.dialog.closeAll();
    this._router.navigate(['test']);
  }
  MaListEvent(id: Number) {
    return this._http.get(this.baseUrl + 'maListEvnts/'+id);
  }
  nbrPaticipant(id: Number) {
    return this._http.get(this.baseUrl + 'nbrPaticipant/'+id);
  }
  
  listmembers(id: Number){
  
    return this._http.get(this.baseUrl + 'listmembers/'+id);
  }
  mesDemandes(id: Number){
    return this._http.get(this.baseUrl + 'mesDemandes/'+id);
  }


  demande(){
    this.bienDemnd=true;
  }
  dedemande(){
    this.bienDemnd=false;
  }
  testDemande(){
    return this.bienDemnd
    }

}