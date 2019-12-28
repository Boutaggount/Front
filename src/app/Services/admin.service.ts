import { Injectable } from '@angular/core';
import { Administrateur } from '../model/Administrateur';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: String = 'http://localhost:8090/admins/';
  private admins: Administrateur;
  constructor(private _http: HttpClient, private _router: Router) { }

  getAll() {
    return this._http.get(this.baseUrl + 'all');
  }

  add(admin: Administrateur) {
    return this._http.post(this.baseUrl + 'save', JSON.parse(JSON.stringify(admin))
    ).subscribe(response => { console.log(response); });
   
  }
}
