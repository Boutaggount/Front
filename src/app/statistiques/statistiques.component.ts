import { Component, OnInit } from '@angular/core';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Hackaton } from '../model/Hackaton';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit{
  hackathons:string[]=  []
  nbMembersH:number[] = []
  nbMemebersF:number[] = []
  nbHackaton:number
  nbParticipant:number
  nbEquipe:number
  nbDemande:number

  constructor(private _serviceHackathons:GestionHackatonService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this.hackathons;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.nbMembersH, label: 'Hommes'},
    {data: this.nbMemebersF, label: 'Femmes'}
  ];

  ngOnInit() {
    //noms des hackathons
    this._serviceHackathons.getAll().subscribe(
      (response:Hackaton[])=>{
        response.forEach(element => {
          this.hackathons.push(element.intitule.toString());
        });
        this.barChartLabels = this.hackathons;
        
        //nombre hommes
        this._serviceHackathons.getNbMembersH().subscribe(
          (response:number[])=>{
            this.nbMembersH = response;

       
            //nombre femmes
        this._serviceHackathons.getNbMembersF().subscribe(
          (response:number[])=>{
            this.nbMemebersF = response;
            this.barChartData = [
              {data: this.nbMembersH, label: 'Hommes'},
              {data: this.nbMemebersF, label: 'Femmes'}
            ];
            console.log(this.hackathons,'---',this.nbMembersH,'----', this.nbMemebersF)
          }
        );
          }
        );

        
      }
    );
  
         //nombre hackaton
         this._serviceHackathons.getNbHackatons().subscribe(
          (response:number)=>{
            this.nbHackaton= response;
          });

          //nombre Participants
         this._serviceHackathons.getNbPArticipants().subscribe(
          (response:number)=>{
            this.nbParticipant= response;
          });

          //nombre equipe
         this._serviceHackathons.getNbEquipe().subscribe(
          (response:number)=>{
            this.nbEquipe= response;
          });

           //nombre demande
         this._serviceHackathons.getNbDemande().subscribe(
          (response:number)=>{
            this.nbDemande= response;
          });
  }


}
