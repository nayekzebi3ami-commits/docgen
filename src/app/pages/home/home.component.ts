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
  subscriptionEndDate: Date | null = null;

  services = [
    { name: 'Devenir Partenaire', description: 'Cette fonction vous permet de générer des documents en illimité', image: 'assets/partner.jpg', route: 'partenaire', enabled: true },
    { name: 'Laboratoire', description: 'Générer des résultats de tests de laboratoire', image: 'assets/labo.jpg', route: 'laboratoire', enabled: true },
    { name: 'Logement', description: 'Générer des contrats de location et documents immobiliers', image: 'assets/logement.jpg', route: 'logement', enabled: true },
    { name: 'Contravention', description: 'Faire sauter une contravention', image: 'assets/contraventions.jpg', route: 'contraventions', enabled: true },
    { name: 'Justificatif de domicile ', description: 'Générer des justificatifs de domicile', image: 'assets/jdd.jpg', route: 'justificatif-de-domicile', enabled: true },
    { name: 'Documents d\'identité et permis', description: 'Commander un document d\'identité ou un permis', image: 'assets/cni.jpg', route: 'nos-docs-id-permis', enabled: true },
    { name: 'Nos chèques bancaires (Particulier, Professionnel)', description: 'Commander des chèques de banque', image: 'assets/cheques.jpg', route: 'nos-cheques', enabled: true },
    { name: 'Gouvernement', description: 'Générer des documents administratifs officiels', image: 'assets/gouv.jpg', route: 'gouvernement', enabled: true },
    { name: 'Diplômes', description: 'Générer des diplômes et certificats académiques', image: 'assets/diplomes.jpg', route: 'diplome', enabled: false },
    { name: 'Assurance', description: 'Générer des polices d\'assurance et attestations', image: 'assets/assu.jpg', route: 'assurance', enabled: false },
    { name: 'Avis d\'imposition', description: 'Générer des avis d\'imposition et documents fiscaux', image: 'assets/impo.jpg', route: 'avis-imposition', enabled: false },
  ];

  constructor(private router: Router, private authService: AuthService, private walletSrv: WalletService, private profilSrv: ProfilService) { }

  ngOnInit() {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.balance = await this.walletSrv.getMyWalletAmount(userId);
        this.accountLevel = await this.walletSrv.getAccountLevel(userId);
        this.subscriptionEndDate = await this.walletSrv.getSubscriptionEndDate(userId);
        const profil = await this.profilSrv.getMyInfo(userId);
        this.pseudo = profil.pseudo;
      }
    });
  }

  getFormattedEndDate(): string {
    if (!this.subscriptionEndDate) return "Aucune date d'abonnement trouvée.";
    return `Votre abonnement se termine le ${this.subscriptionEndDate.toLocaleDateString()}`;
  }

}