import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../app/index/index.component'
import {NewEventComponent} from '../app/new-event/new-event.component'
import {ListEventsComponent} from '../app/list-events/list-events.component'
import {DetaillComponent} from '../app/detaill/detaill.component'
import {AuthentificationComponent} from '../app/authentification/authentification.component'
import { DialogExComponent } from './dialog-ex/dialog-ex.component';
import {TestComponent} from'./test/test.component'
import { StatistiquesComponent } from './statistiques/statistiques.component';



const routes: Routes = [
  {path:'Statistiques', component:StatistiquesComponent},
  {path : '' ,component:IndexComponent},
  {path:'newEvent', component:NewEventComponent},
  {path:'listEvent',component:ListEventsComponent},
  {path:'historique',component:IndexComponent},
  {path:'detaill',component:DetaillComponent},
  {path:'login',component:AuthentificationComponent},
  {path:'test',component:DialogExComponent},
  {path:'mm',component:TestComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
