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
import { GererEquipesComponent } from './gerer-equipes/gerer-equipes.component';


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
    GererEquipesComponent
  ],
  entryComponents:[
    NewMembreComponent,
    AuthentificationComponent,
    UpdateEventComponent
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
    MatButtonModule
  ],
  providers: [GestionHackatonService,MemberService,AuthentificationService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
