import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssuranceComponent } from './assurance/assurance.component';
import { AutresComponent } from './autres/autres.component';
import { AvisImpositionComponent } from './avis-imposition/avis-imposition.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { GouvernementComponent } from './gouvernement/gouvernement.component';
import { HomeComponent } from './home/home.component';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { LogementComponent } from './logement/logement.component';
import { LoginComponent } from './login/login.component';
import { MorePageComponent } from './more-page/more-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ModalPaiementComponent } from './modal-paiement/modal-paiement.component';
import { FormsModule } from '@angular/forms';
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
    ModalPaiementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
