import { Component } from '@angular/core';

interface PageLink {
  title: string;
  icon: string;
  route: string;
  category: string;
}

@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrl: './more-page.component.scss'
})
export class MorePageComponent {
  pageLinks: PageLink[] = [
    { title: 'Laboratoire', icon: 'flask', route: '/laboratoire', category: 'services' },
    { title: 'Logement', icon: 'home', route: '/logement', category: 'services' },
    { title: 'Gouvernement', icon: 'landmark', route: '/gouvernement', category: 'services' },
    { title: 'Assurance', icon: 'shield-alt', route: '/assurance', category: 'services' },
    { title: 'Diplômes', icon: 'graduation-cap', route: '/diplome', category: 'services' },
    { title: 'Avis d\'imposition', icon: 'file-invoice-dollar', route: '/avis-imposition', category: 'services' },
    { title: 'Devenir partenaire', icon: 'handshake', route: '/partenaire', category: 'services' },
    { title: 'Autres (CNI, Chèques, Amendes, Pare-brises)', icon: 'ellipsis-h', route: '/autres', category: 'services' },
    { title: 'Accueil', icon: 'home', route: '/', category: 'menu' },
    { title: 'Support', icon: 'headset', route: '/support', category: 'support' },
    { title: 'Wallet', icon: 'wallet', route: '/wallet', category: 'compte' },
    { title: 'Profil', icon: 'user', route: '/profile', category: 'compte' }
  ];

  getFilteredLinks(category: string): PageLink[] {
    return this.pageLinks.filter(link => link.category === category);
  }
}
