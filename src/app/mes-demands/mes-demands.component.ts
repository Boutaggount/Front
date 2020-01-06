import { Component, OnInit } from '@angular/core';
import { Hackaton } from '../model/Hackaton';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Membre } from '../model/Membre';
import { DemandeService } from '../Services/demande.service';
import { Demande } from '../model/Demande';
import { MatDialog } from '@angular/material';
import { DetaillComponent } from '../detaill/detaill.component';
import { DetaillDemandeComponent } from '../detaill-demande/detaill-demande.component';
import { MemberService } from '../Services/member.service';

@Component({
  selector: 'app-mes-demands',
  templateUrl: './mes-demands.component.html',
  styleUrls: ['./mes-demands.component.css']
})
export class MesDemandsComponent implements OnInit {
  private maList:Hackaton[];
  private members:Membre[];
  private demande:Demande;
  private idH:Number;
  private testD:Number=0;
  constructor(private _serv: GestionHackatonService,
              private _servD:DemandeService,
              private dialog:MatDialog,
              private _servM:MemberService) { }

  ngOnInit() {
    this._serv.MaListEvent(1).subscribe(
      (data: Hackaton[]) => {
        this.maList = data;
      }
    );
  }
  voireDemanes(id:Number){
        this.testD=1;
        this.idH=id;
        this._serv.mesDemandes(id).subscribe((data:Membre[])=>{
          this.members=data;
          console.log(this.members)
        });
 
  }
  gererDemande(id_mem:Number,nom:string,prenom:string,mail:string){
      let m=new Membre();
      m.nom=nom;
      m.prenom=prenom;
      m.email=mail;
      m.id_mem=id_mem;
      this._servM.setMembre(m);
      sessionStorage.setItem("idm",id_mem.toString())
      sessionStorage.setItem("idH",this.idH.toString())
      this.dialog.open(DetaillDemandeComponent,{
      
    
      });
                 
  }
 




  TestD(){
    return this.testD;
  }

}
