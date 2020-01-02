
import { Component, ViewChild, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { GestionHackatonService } from '../Services/gestion-hackaton.service';
import { Hackaton } from '../model/Hackaton';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit{
  data:Hackaton[];
  constructor (private gestion : GestionHackatonService){}
  ngOnInit(){
    this.gestion.getAll().subscribe(
      (Response:Hackaton[])=>{
        this.data=Response;
        console.log(this.data);
        this.data.forEach(element => {
          this.calendarEvents = this.calendarEvents.concat({
            title: element.intitule.toString(),
            //backgroundColor:"blue",
            start: element.date_debut,
            end:element.date_fin,
            allDay: true
          })
        });
       
      }
    );
  }  
  @ViewChild('calendar',{static: false}) calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = false;
  calendarEvents: EventInput[] = [];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }
  handleEventClick(arg){    
    if(confirm("Etes-vous sur de vouloir supprimer l'evenemt ?"+ arg.event.title)){
      this.calendarEvents.forEach(element => {
        if(element.title == arg.event.title){        
          this.calendarEvents.splice(this.calendarEvents.indexOf(element),1);                     
          console.log(this.calendarEvents);         
        }      
      });        
    }        
    
  }
  handleDateClick(arg) {    
    let text:string = prompt("entrer la description de l'evenemt ");
    if(text != null){
      this.calendarEvents = this.calendarEvents.concat({
        title: text,
        start: arg.date,
        allDay: arg.allDay
      })
      console.log(arg.allDay)
    }
    
  }
}
