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
import { AuthGuard } from './auth/auth.guard';
import { MesDocumentsComponent } from './pages/mes-documents/mes-documents.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { JustificatifDeDomicileComponent } from './pages/justificatif-de-domicile/justificatif-de-domicile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] },
  { path: 'laboratoire', component: LaboratoireComponent, canActivate: [AuthGuard] },
  { path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard] },
  { path: 'assurance', component: AssuranceComponent, canActivate: [AuthGuard] },
  { path: 'autres', component: AutresComponent, canActivate: [AuthGuard] },
  { path: 'avis-imposition', component: AvisImpositionComponent, canActivate: [AuthGuard] },
  { path: 'mes-documents', component: MesDocumentsComponent, canActivate: [AuthGuard] },
  { path: 'diplome', component: DiplomeComponent, canActivate: [AuthGuard] },
  { path: 'partenaire', component: PartenaireComponent, canActivate: [AuthGuard] },
  { path: 'gouvernement', component: GouvernementComponent, canActivate: [AuthGuard] },
  { path: 'logement', component: LogementComponent, canActivate: [AuthGuard] },
  { path: 'support', component: MyTicketsComponent, canActivate: [AuthGuard] },
  { path: 'plus', component: MorePageComponent, canActivate: [AuthGuard] },
  { path: 'Justificatif de domicile', component: JustificatifDeDomicileComponent, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
