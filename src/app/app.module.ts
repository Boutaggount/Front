import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatIconModule, MatButtonModule} from "@angular/material";
/*****************************************************************************/
import {GestionHackatonService} from '../app/Services/gestion-hackaton.service'
import {MemberService} from '../app/Services/member.service'
import {AuthentificationService} from '../app/Services/authentification.service'
import {AdminService} from '../app/Services/admin.service'
/*****************************************************************************/
import { AppComponent } from './app.component';
import { NvBarComponent } from './nv-bar/nv-bar.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { IndexComponent } from './index/index.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { DetaillComponent } from './detaill/detaill.component';
import { DialogExComponent } from './dialog-ex/dialog-ex.component';
import { NewMembreComponent } from './new-membre/new-membre.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { TestComponent } from './test/test.component';
import { MonTestComponent } from './mon-test/mon-test.component';


import { FullCalendarModule } from '@fullcalendar/angular';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { ChartsModule } from 'ng2-charts';
import { MesEventComponent } from './mes-event/mes-event.component';
import { DemandeComponent } from './demande/demande.component';
import { MesDemandsComponent } from './mes-demands/mes-demands.component';
import { DemandeService } from './Services/demande.service';
import { DetaillDemandeComponent } from './detaill-demande/detaill-demande.component';

@NgModule({
  declarations: [
  
    AppComponent,
    NvBarComponent,
    AuthentificationComponent,
    IndexComponent,
    VerticalBarComponent,
    ListEventsComponent,
    NewEventComponent,
    DetaillComponent,
    DialogExComponent,
    NewMembreComponent,
    UpdateEventComponent,
    TestComponent,
    MonTestComponent,
    StatistiquesComponent,
    MesEventComponent,
    DemandeComponent,
    MesDemandsComponent,
    DetaillDemandeComponent
  ],
  entryComponents:[
    NewMembreComponent,
    AuthentificationComponent,
    UpdateEventComponent,
    DetaillDemandeComponent

  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ChartsModule,
    FullCalendarModule
  ],
  providers: [GestionHackatonService,MemberService,AuthentificationService,AdminService,DemandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
