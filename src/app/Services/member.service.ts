import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Membre } from '../model/Membre'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl: String = 'http://localhost:8090/membres/';
  private membre: Membre;

  constructor(private _http: HttpClient, private _router: Router) { }
setMembre(m:Membre){
  this.membre=m;
}
getMembre(){
return this.membre;
}

  getAll() {
    return this._http.get(this.baseUrl + 'all');
  }

  add(mem: Membre) {
    return this._http.post(this.baseUrl + 'save', JSON.parse(JSON.stringify(mem))
    ).subscribe(response => { console.log(response); });
  
  }

}
