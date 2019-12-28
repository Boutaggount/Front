import { Component, OnInit } from '@angular/core';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-ex',
  templateUrl: './dialog-ex.component.html',
  styleUrls: ['./dialog-ex.component.css']
})
export class DialogExComponent implements OnInit {
  
  constructor(private _serv:GestionHackatonService,private _router:Router) { }

  ngOnInit() {
  }
  listEvent(){
      this._router.navigate(['listEvent'])
  }

}
