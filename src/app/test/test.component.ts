import { Component, OnInit } from '@angular/core';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _serv:GestionHackatonService,private dialog:MatDialog) { }

  ngOnInit() {
  }

}
