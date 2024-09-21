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
