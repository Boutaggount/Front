import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-test',
  templateUrl: './mon-test.component.html',
  styleUrls: ['./mon-test.component.css']
})
export class MonTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*
  creerEquips(){
    //this.creer==true;
    this.numbersE = Array(this.monHack.nbr).fill(0).map((x,i)=>i);
    this.perParEquip=this.monHack.capacite/this.monHack.nbr;
    this.numbersP = Array(this.monHack.capacite/this.monHack.nbr).fill(0).map((x,i)=>i);
     creation des equipe avec membres aliaoire 
    if(this.monHack.eqestcreer==false){
    this._serv.listmembers(this.monHack.id).subscribe(
      (data: Membre[]) => {
        
        this.membres=data
     
      for(var i=0;i<this.monHack.nbr;i++){
        let a:string=this.makeString();
        this.equipe=new equipe;
        this.equipe.nom=a;
        let b =this._servE.add(this.equipe)
        console.log("le id reteourner"+b)
         

          for(var j=0;j<this.perParEquip;j++){
            let m:string=this.gerermembers();          
            this._servE.addmember(m)      
          }
      }
    }
    );
  } Fin de la creation des equipes 
  si les equipe deja creer afficher 
  else {
      this._servE.mesEquipe(this.monHack.id).subscribe(
        (data:equipe[])=>{
          this.equipes=data;
          console.log(this.equipes[1].nom)
        }
      );
    
  }
     
    }
   */
}
