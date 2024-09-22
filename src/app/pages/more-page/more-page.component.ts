import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfilService } from '../../services/profil.service';

interface PageLink {
  title: string;
  icon: string;
  route: string;
  category: string;
  admin: boolean;
}

@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrl: './more-page.component.scss'
})
export class MorePageComponent implements OnInit {
  pageLinks: PageLink[] = [
    { title: 'Administration', icon: 'cog', route: '/administration', category: 'administration', admin: true },
    { title: 'Mes documents', icon: 'file-alt', route: '/mes-documents', category: 'stockage', admin: false },
    { title: 'Laboratoire', icon: 'flask', route: '/laboratoire', category: 'services', admin: false },
    { title: 'Logement', icon: 'home', route: '/logement', category: 'services', admin: false },
    { title: 'Gouvernement', icon: 'landmark', route: '/gouvernement', category: 'services', admin: false },
    { title: 'Assurance', icon: 'shield-alt', route: '/assurance', category: 'services', admin: false },
    { title: 'Diplômes', icon: 'graduation-cap', route: '/diplome', category: 'services', admin: false },
    { title: 'Avis d\'imposition', icon: 'file-invoice-dollar', route: '/avis-imposition', category: 'services', admin: false },
    { title: 'Devenir partenaire', icon: 'handshake', route: '/partenaire', category: 'services', admin: false },
    { title: 'Autres (CNI, Chèques, Amendes, Pare-brises)', icon: 'ellipsis-h', route: '/autres', category: 'services', admin: false },
    { title: 'Accueil', icon: 'home', route: '/', category: 'menu', admin: false },
    { title: 'Support', icon: 'headset', route: '/support', category: 'support', admin: false },
    { title: 'Wallet', icon: 'wallet', route: '/wallet', category: 'compte', admin: false },
    { title: 'Profil', icon: 'user', route: '/profil', category: 'compte', admin: false }
  ];  
  protected admin: boolean = false;

  constructor(private authService: AuthService, private profilSrv: ProfilService) {}

  ngOnInit(): void {
    this.authService.getUserId().subscribe(async userId => {
      if(userId) {
        const profil = await this.profilSrv.getMyInfo(userId);
        this.admin = profil.admin || false;
      }
    });
  }

  getFilteredLinks(category: string): PageLink[] {
    return this.pageLinks.filter(link => link.category === category);
  }
}
