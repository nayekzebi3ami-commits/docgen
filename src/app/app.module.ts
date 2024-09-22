import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssuranceComponent } from './pages/assurance/assurance.component';
import { AutresComponent } from './pages/autres/autres.component';
import { AvisImpositionComponent } from './pages/avis-imposition/avis-imposition.component';
import { DiplomeComponent } from './pages/diplome/diplome.component';
import { GouvernementComponent } from './pages/gouvernement/gouvernement.component';
import { HomeComponent } from './pages/home/home.component';
import { LaboratoireComponent } from './pages/laboratoire/laboratoire.component';
import { LogementComponent } from './pages/logement/logement.component';
import { LoginComponent } from './pages/login/login.component';
import { MorePageComponent } from './pages/more-page/more-page.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MyTicketsComponent } from './pages/my-tickets/my-tickets.component';
import { NavComponent } from './pages/nav/nav.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { PartenaireComponent } from './pages/partenaire/partenaire.component';
import { ModalPaiementComponent } from './pages/modal-paiement/modal-paiement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalGenerateDocComponent } from './pages/modal-generate-doc/modal-generate-doc.component';
import { MesDocumentsComponent } from './pages/mes-documents/mes-documents.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { AnswerTicketComponent } from './pages/answer-ticket/answer-ticket.component';
import { JustificatifDeDomicileComponent } from './pages/justificatif-de-domicile/justificatif-de-domicile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTicketsComponent,
    MyOrdersComponent,
    ProfileComponent,
    WalletComponent,
    LoginComponent,
    NavComponent,
    MorePageComponent,
    LaboratoireComponent,
    LogementComponent,
    GouvernementComponent,
    AssuranceComponent,
    DiplomeComponent,
    AvisImpositionComponent,
    AutresComponent,
    PartenaireComponent,
    ModalPaiementComponent,
    ModalGenerateDocComponent,
    MesDocumentsComponent,
    AdministrationComponent,
    AnswerTicketComponent,
    JustificatifDeDomicileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Durée des notifications
      positionClass: 'toast-top-right', // Position
      preventDuplicates: true, // Empêcher les doublons
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialiser Firebase
    AngularFireAuthModule // Importer le module d'authentification
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
