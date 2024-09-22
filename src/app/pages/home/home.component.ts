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

  services = [
    { name: 'Laboratoire', description: 'Générer des résultats de tests de laboratoire', image: 'assets/labo.png', route: 'laboratoire' },
    { name: 'Devenir Partenaire', description: 'Générer des contrats de partenariat', image: 'assets/partenaire.png', route: 'partenaire' },
    { name: 'Logement', description: 'Générer des contrats de location et documents immobiliers', image: 'assets/partenaire.png', route: 'logement' },
    { name: 'Gouvernement', description: 'Générer des documents administratifs officiels', image: 'assets/partenaire.png', route: 'gouvernement' },
    { name: 'Diplômes', description: 'Générer des diplômes et certificats académiques', image: 'assets/partenaire.png', route: 'diplome' },
    { name: 'Justificatif de domicile ', description: 'Générer des justificatifs de domicile', image: 'assets/partenaire.png', route: 'Justificatif de domicile' },
    { name: 'Autres (CNI, Chèques, Amendes, Pare-brises)', description: 'Générer divers documents (CNI, chèques, amendes, pare-brises)', image: 'assets/partenaire.png', route: 'autres' },
    { name: 'Assurance (Bientot disponible)', description: 'Générer des polices d\'assurance et attestations', image: 'assets/partenaire.png', route: 'assurance' },
    { name: 'Avis d\'imposition (Bientot disponible)', description: 'Générer des avis d\'imposition et documents fiscaux', image: 'assets/partenaire.png', route: 'avis-imposition' },
  ];

  constructor(private router: Router, private authService: AuthService, private walletSrv: WalletService, private profilSrv: ProfilService) { }

  ngOnInit() {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.balance = await this.walletSrv.getMyWalletAmount(userId);
        const profil = await this.profilSrv.getMyInfo(userId);
        this.pseudo = profil.pseudo;
      }
    });
  }
}