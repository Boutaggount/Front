import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit{

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Hackaton1', 'Hackaton2','Hackaton3','Hackaton4','Hackaton5','Hackaton4','Hackaton5'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Hommes'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Femmes'}
  ];

  ngOnInit() {
  }

}
