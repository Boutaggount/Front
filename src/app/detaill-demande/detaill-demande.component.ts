import { Component, OnInit } from '@angular/core';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { DemandeService } from '../Services/demande.service';
import { Demande } from '../model/Demande';
import { Membre } from '../model/Membre';
import { MemberService } from '../Services/member.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-detaill-demande',
  templateUrl: './detaill-demande.component.html',
  styleUrls: ['./detaill-demande.component.css']
})
export class DetaillDemandeComponent implements OnInit {
  private demande:Demande;
  private membre:Membre;
  constructor(private serv:DemandeService,
              private servM:MemberService,
              private servH:GestionHackatonService,
              private router:Router,
              private dialog:MatDialog) { }

  ngOnInit() {
    this.membre=this.servM.getMembre()
    let idm=sessionStorage.getItem('idm');
    let idh=sessionStorage.getItem('idH')
    this.serv.maDemande(idm,idh).subscribe((data:Demande) => { this.demande=data
      console.log(this.demande)
      console.log(this.membre)
    } );;
  }
  accepter(){
    this.servH.participer(sessionStorage.getItem('idm'),sessionStorage.getItem('idH'));
    this.dialog.closeAll();
  
  }
  annuler(){
    this.serv.annuler(this.demande.id_demande);
    this.dialog.closeAll();
  }
  

}
