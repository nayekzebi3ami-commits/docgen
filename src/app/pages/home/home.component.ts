import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { WalletService } from '../../services/wallet.service';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  balance: number = 0;
  pseudo: string = '';
  accountLevel: 'basic' | 'premium' | 'admin' | '' = '';
  services = [
    { name: 'Laboratoire', description: 'Générer des résultats de tests de laboratoire', image: 'assets/labo.png', route: 'laboratoire', enabled: true },
    { name: 'Devenir Partenaire', description: 'Générer des contrats de partenariat', image: 'assets/partenaire.png', route: 'partenaire', enabled: true },
    { name: 'Gouvernement', description: 'Générer des documents administratifs officiels', image: 'assets/partenaire.png', route: 'gouvernement', enabled: true },
    { name: 'Logement', description: 'Générer des contrats de location et documents immobiliers', image: 'assets/partenaire.png', route: 'logement', enabled: true },
    { name: 'Justificatif de domicile ', description: 'Générer des justificatifs de domicile', image: 'assets/partenaire.png', route: 'Justificatif de domicile', enabled: true },
    { name: 'Autres (CNI, Chèques, Amendes, Pare-brises)', description: 'Générer divers documents (CNI, chèques, amendes, pare-brises)', image: 'assets/partenaire.png', route: 'autres', enabled: true },
    { name: 'Diplômes', description: 'Générer des diplômes et certificats académiques', image: 'assets/partenaire.png', route: 'diplome', enabled: false },
    { name: 'Assurance', description: 'Générer des polices d\'assurance et attestations', image: 'assets/partenaire.png', route: 'assurance', enabled: false },
    { name: 'Avis d\'imposition', description: 'Générer des avis d\'imposition et documents fiscaux', image: 'assets/partenaire.png', route: 'avis-imposition', enabled: false },
  ];

  constructor(private router: Router, private authService: AuthService, private walletSrv: WalletService, private profilSrv: ProfilService) { }

  ngOnInit() {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.balance = await this.walletSrv.getMyWalletAmount(userId);
        this.accountLevel = await this.walletSrv.getAccountLevel(userId);
        const profil = await this.profilSrv.getMyInfo(userId);
        this.pseudo = profil.pseudo;
      }
    });
  }
}