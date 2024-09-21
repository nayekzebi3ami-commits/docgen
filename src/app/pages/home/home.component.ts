import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    { name: 'Laboratoire', description: 'Générer des résultats de tests de laboratoire', image: 'assets/labo.png', route: 'laboratoire' },
    { name: 'Devenir Partenaire', description: 'Générer des contrats de partenariat', image: 'assets/partenaire.png', route: 'partenaire' },
    { name: 'Logement', description: 'Générer des contrats de location et documents immobiliers', image: 'assets/partenaire.png', route: 'logement' },
    { name: 'Gouvernement', description: 'Générer des documents administratifs officiels', image: 'assets/partenaire.png', route: 'gouvernement' },
    { name: 'Assurance', description: 'Générer des polices d\'assurance et attestations', image: 'assets/partenaire.png', route: 'assurance' },
    { name: 'Diplômes', description: 'Générer des diplômes et certificats académiques', image: 'assets/partenaire.png', route: 'diplome' },
    { name: 'Avis d\'imposition', description: 'Générer des avis d\'imposition et documents fiscaux', image: 'assets/partenaire.png', route: 'avis-imposition' },
    { name: 'Autres (CNI, Chèques, Amendes, Pare-brises)', description: 'Générer divers documents (CNI, chèques, amendes, pare-brises)', image: 'assets/partenaire.png', route: 'autres' },
  ];

  constructor(private router: Router) {}
}