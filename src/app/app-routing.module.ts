import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { MorePageComponent } from './more-page/more-page.component';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { LogementComponent } from './logement/logement.component';
import { GouvernementComponent } from './gouvernement/gouvernement.component';
import { AvisImpositionComponent } from './avis-imposition/avis-imposition.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { AutresComponent } from './autres/autres.component';
import { AssuranceComponent } from './assurance/assurance.component';
import { PartenaireComponent } from './partenaire/partenaire.component';

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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
