import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  activeItem = 'home';
  isLoggedIn: boolean = false;
  navItems: NavItem[] = [
    { id: 'home', icon: 'home', label: 'Accueil', route: '' },
    { id: 'support', icon: 'headset', label: 'Support', route: 'support' },
    { id: 'wallet', icon: 'wallet', label: 'Wallet', route: 'wallet' },
    { id: 'profile', icon: 'user', label: 'Profil', route: 'profil' },
    { id: 'more', icon: 'ellipsis-h', label: 'Plus', route: 'plus' }
  ];

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    // Surveiller l'état de connexion de l'utilisateur
    this.afAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user; // Si l'utilisateur est connecté, isLoggedIn est vrai
    });

    // Surveiller les changements de route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveItemByRoute(this.router.url);
    });

    // Définir l'élément actif initial en fonction de la route actuelle
    this.setActiveItemByRoute(this.router.url);
  }

  setActiveItemByRoute(currentRoute: string) {
    const foundItem = this.navItems.find(item => {
      if (item.route === '') {
        return currentRoute === '/';
      }
      return currentRoute.startsWith('/' + item.route);
    });
    if (foundItem) {
      this.activeItem = foundItem.id;
    } else {
      this.activeItem = 'home'; // Par défaut, l'accueil est actif si aucune correspondance
    }
  }

  setActiveItem(id: string): void {
    this.activeItem = id;
  }

  
  logout() {
    this.afAuth.signOut().then(() => {
      console.log('User logged out');
      this.router.navigate(['/login']);
    });
  }
}