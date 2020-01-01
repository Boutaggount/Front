import { Component,ViewChild, OnInit, Renderer2 } from '@angular/core';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Hackaton } from '../model/Hackaton';
import { Membre } from '../model/Membre';
import { equipe } from '../model/equipe';
import { EquipeService } from '../Services/equipe.service';

@Component({
  selector: 'app-gerer-equipes',
  templateUrl: './gerer-equipes.component.html',
  styleUrls: ['./gerer-equipes.component.css']
})
export class GererEquipesComponent implements OnInit {
  private var:string="20px"
  private maList:Hackaton[];
  private monHack:Hackaton;
  private testD:Number=0;
  private pourcentage:number;
  private nbrParticip:number;
  private perParEquip:number;
  private equipe:equipe;
  private numbersE;
  private numbersP;
  private membres:Membre[];
  private membre:Membre;
  constructor(private render: Renderer2,private _serv:GestionHackatonService,private _servE:EquipeService) { }
 
  ngOnInit() {
    this._serv.MaListEvent(1).subscribe(
      (data: Hackaton[]) => {
        this.maList = data;
      }
    );
    
  }

  VoirAv(d:number){
    this.testD=d;
    this._serv.getId(d).subscribe(
      (data: Hackaton) => {
        this.monHack = data;
        sessionStorage.setItem('id_hack',this.monHack.id.toString());

       
        
      }
      );
   
    this._serv.nbrPaticipant(d).subscribe(
      (data: number) => {
        this.nbrParticip = data;  
        this.pourcentage=(this.nbrParticip/this.monHack.capacite)*100
        this.var=this.pourcentage+"%"
          const el: HTMLElement | null = document.getElementById('my_id');
          el.style.width = this.var;
      }
    );
    
    
  }
  test():boolean{
    if(this.testD==0){return false}
    else return true;
  }

  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz';
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    return outString;
  }
  gerermembers(): string{
    
    if(this.membres.length>0){
      
    this.membre=this.membres[0];
    this.membres.splice(0,1);
    return ""+this.membre.id_mem;
  
    } else return "vide"
  
 
    
  }
  creerEquips(){
    //this.creer==true;
    this.numbersE = Array(this.monHack.nbr).fill(0).map((x,i)=>i);
    this.perParEquip=this.monHack.capacite/this.monHack.nbr;
    this.numbersP = Array(this.monHack.capacite/this.monHack.nbr).fill(0).map((x,i)=>i);
    this._serv.listmembers(this.monHack.id).subscribe(
      (data: Membre[]) => {
        
        this.membres=data
     
      for(var i=0;i<this.monHack.nbr;i++){
        let a:string=this.makeString();
        this.equipe=new equipe;
        this.equipe.nom=a;
        
        
        this._servE.add(this.equipe)
        
          for(var j=0;j<this.perParEquip;j++){
            let m:string=this.gerermembers();
            console.log("**********") 
            console.log(m)            
            this._servE.addmember(m)      
          }
      }
    }
    );
    }
}
