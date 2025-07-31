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
    { name: 'CV', description: 'Générer un CV professionnel pour votre recherche d\'emploi', image: 'assets/1-month.jpg', route: 'cv', enabled: false },
    { name: 'Lettre de motivation', description: 'Créer une lettre de motivation personnalisée', image: 'assets/1-month.jpg', route: 'lettre-motivation', enabled: false },
    { name: 'RIB', description: 'Générer un Relevé d\'Identité Bancaire', image: 'assets/1-month.jpg', route: 'rib', enabled: false },
    { name: 'Certificat médical', description: 'Obtenir un certificat médical pour vos besoins administratifs', image: 'assets/1-month.jpg', route: 'certificat-medical', enabled: false },
    { name: 'Ordonnance médicale', description: 'Générer une ordonnance médicale', image: 'assets/1-month.jpg', route: 'ordonnance', enabled: false },
    { name: 'Document de divorce', description: 'Obtenir un document de divorce pour vos démarches', image: 'assets/1-month.jpg', route: 'divorce', enabled: false },
    { name: 'Acte de mariage', description: 'Générer un acte de mariage', image: 'assets/1-month.jpg', route: 'mariage', enabled: false },
    { name: 'Permis étranger', description: 'Service de permis étranger (50€ pour les contraventions)', image: 'assets/1-month.jpg', route: 'permis-etranger', enabled: false },
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
    // Vérifie si l'utilisateur est abonné (premium ou admin)
    if (!this.subscriptionEndDate || !['premium', 'admin'].includes(this.accountLevel)) {
      return '';
    }

    // Calcul du temps restant
    const now = new Date();
    const timeLeft = this.subscriptionEndDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

    // Emoji sablier
    const hourglassEmoji = '⌛';

    return `${hourglassEmoji} Votre abonnement se termine le ${this.subscriptionEndDate.toLocaleDateString()} (${daysLeft} jours restants)`;
  }
}