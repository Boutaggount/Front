import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Hackaton } from '../model/Hackaton';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  tab: Hackaton;
  tabT: Hackaton;
  hachaton:Hackaton;
  constructor(private dialog: MatDialog,private _serv:GestionHackatonService) { }
  
  ngOnInit() {

   this.tab=this._serv.getHck();

  }
    onSubmit(f:NgForm){
          this._serv.add(this.tab);
          this.dialog.closeAll();
    }
  

}
