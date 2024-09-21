import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyTicketsComponent } from './pages/my-tickets/my-tickets.component';
import { MorePageComponent } from './pages/more-page/more-page.component';
import { LaboratoireComponent } from './pages/laboratoire/laboratoire.component';
import { LogementComponent } from './pages/logement/logement.component';
import { GouvernementComponent } from './pages/gouvernement/gouvernement.component';
import { AvisImpositionComponent } from './pages/avis-imposition/avis-imposition.component';
import { DiplomeComponent } from './pages/diplome/diplome.component';
import { AutresComponent } from './pages/autres/autres.component';
import { AssuranceComponent } from './pages/assurance/assurance.component';
import { PartenaireComponent } from './pages/partenaire/partenaire.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'laboratoire', component: LaboratoireComponent },
  { path: 'assurance', component: AssuranceComponent },
  { path: 'autres', component: AutresComponent },
  { path: 'avis-imposition', component: AvisImpositionComponent },
  { path: 'diplome', component: DiplomeComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'gouvernement', component: GouvernementComponent },
  { path: 'logement', component: LogementComponent },
  { path: 'support', component: MyTicketsComponent },
  { path: 'plus', component: MorePageComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
