import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

import { NewEventComponent } from '../new-event/new-event.component';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Hackaton } from '../model/Hackaton';
import { DetaillComponent } from '../detaill/detaill.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  hachaton_in: Hackaton[] = [];
  tab: Hackaton[] = [];
  Rville: String;
  Rtheme: String;
  var: Number;

  constructor( private cdr: ChangeDetectorRef,private _serv: GestionHackatonService,private dialog: MatDialog,private _router: Router) {

  }

  ngOnInit() {

    this._serv.getAll().subscribe(
      (data: Hackaton[]) => {
        this.hachaton_in = data;
        this.tab = this.hachaton_in;
      }
    );
    this.cdr.detectChanges();
  }
  
  chercherVille() {

    if (this.Rville === undefined) {
      alert("message erreur");
    } else {
      this.tab = [];
      for (var i = 0; i < this.hachaton_in.length; i++) {
        if (this.hachaton_in[i].ville == this.Rville) {
          this.tab.push(this.hachaton_in[i]);
        }
      }
    }
  }
  chercherTheme() {

    if (this.Rtheme === undefined) {
      alert("message erreur");
    } else {
      this.tab = [];
      for (var i = 0; i < this.hachaton_in.length; i++) {
        if (this.hachaton_in[i].theme == this.Rtheme) {
          this.tab.push(this.hachaton_in[i]);
        }
      }
    }
  }
  affDet(a:Hackaton){
    this._serv.dedemande();
    this._serv.setHack(a);
    sessionStorage.setItem('id_hack',a.id.toString());
    this.dialog.open(DetaillComponent,{
      
    
    });
  }
  demandeEff(){
    return this._serv.testDemande()
  }

}
