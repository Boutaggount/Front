import { Component, OnInit } from '@angular/core';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Hackaton } from '../model/Hackaton';
import { Membre } from '../model/Membre';
import { MemberService } from '../Services/member.service';
import { EquipeService } from '../Services/equipe.service';
import { equipe } from '../model/equipe';

@Component({
  selector: 'app-mes-event',
  templateUrl: './mes-event.component.html',
  styleUrls: ['./mes-event.component.css']
})
export class MesEventComponent implements OnInit {
  private maList:Hackaton[];
  private members:Membre[]=[];
  private member:Membre;
  private equipes:equipe[]=[];
  private equipe:equipe;
  private testD: Number = 0;
  private testP: Number = 0;
  private testC: Number = 0;
  private testBC: Number = 0;
  private nbrPaticipant:number;
  private testGE: Number = 0;
  private testEQ: Number = 0;
  private monHack: Hackaton;
  private etatEvent:boolean;
  constructor(private _serv: GestionHackatonService,private _servE: EquipeService) { }

  ngOnInit() {
    this._serv.MaListEvent(1).subscribe(
      (data: Hackaton[]) => {
        this.maList = data;
      }
    );
  }

  VoirAv(d: number) {
    this.testBC=0;
    this.testC=0;
    this.testGE = 0;
    this.testP = 0;
    this.testD = d;
    this._serv.getId(d).subscribe(
      (data: Hackaton) => {
        this.monHack = data;
        sessionStorage.setItem('id_hack', this.monHack.id.toString());
        this.etatEvent=this.monHack.eqestcreer;
      }
    );
    
    this._serv.nbrPaticipant(d).subscribe(
      (data: number) => {
        this.nbrPaticipant=data;
        let a=(data / this.monHack.capacite) * 100
        const el: HTMLElement | null = document.getElementById('my_id');
        
        el.style.width = a+"%";
        const e2: HTMLElement | null = document.getElementById('pourcentage');
        e2.innerHTML=a+"%";
      }
    );
  }

  listParticip(){
    
    this._serv.listmembers(this.monHack.id).subscribe(
      (data:Membre[])=>{
          this.members=data;
          console.log(data)
      }
    );
    this.testP = 1
    this.testGE = 0
  }
  /*****  gestionEquipe */
  gestionEquipe(){
    this.testP = 0
    this.testGE = 1
    if (this.etatEvent) {
      this._servE.mesEquipe(this.monHack.id).subscribe((response: equipe[]) => {
        this.equipes = response;
        console.log(response)
      });    
    }
  }
  affEq(id:number){

    this._servE.membreParEquipes(id).subscribe((response: Membre[]) => {
      this.members = response;
      console.log(response)
    });    
    this.testEQ = 1;
  }
  Creer(){
    console.log("nbrP"+this.nbrPaticipant+"cap"+this.monHack.capacite)
    let abc:number=this.monHack.capacite / this.monHack.nbr;
  if(this.nbrPaticipant<this.monHack.capacite){
    this.testC=1;
  }else {
    
    this._serv.listmembers(this.monHack.id).subscribe(
      (data: Membre[]) => {
        this.members = data
        let tab: string[] = [];
        for (var i = 0; i < this.monHack.nbr; i++) {
          let a: string = this.makeName();
          this.equipe = new equipe;
          this.equipe.nom = a;
          for (var j = 0; j < abc; j++) {
            let m: string = this.gerermembers();
            tab.push(m);
          }
          this._servE.add(this.equipe, tab, abc)
          tab = []

        }
        this.monHack.eqestcreer = true;
        this._serv.update(this.monHack)
      }
    );
    this.testP = 0
  this.testGE = 0
  this.testC=0
  this.testD=0
  this.testBC=1;
  }


}









  testEq():boolean{
    if (this.testEQ == 0) { return false }
    else return true;
  }
  EtatEv(){
    return this.etatEvent;
  }
  testGestEquipe(): boolean {
    if (this.testGE == 0) { return false }
    else return true;
  }

  testParticip(): boolean {
    if (this.testP == 0) { return false }
    else return true;
  }
  test(): boolean {
    if (this.testD == 0) { return false }
    else return true;
  }
  testCr(): boolean {
    if (this.testC == 0) { return false }
    else return true;
  }
  testB(): boolean {
    if (this.testBC == 0) { return false }
    else return true;
  }

  makeName(): string {
    let nom: string='';
    let equips: string []= ["Noire","Rouge","Vert","blanche","jaune","Bleu","Marrone","Gris"]
    var randomNumber = Math.floor(Math.random()*equips.length);
    equips.splice(randomNumber,1);
    nom=equips[randomNumber];
    return nom;
  }
  

  gerermembers(): string {

    if (this.members.length > 0) {

      this.member = this.members[0];
      this.members.splice(0, 1);
      return "" + this.member.id_mem;

    } else return "vide"
  }
}
