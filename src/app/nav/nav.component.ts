import { Component, OnInit } from '@angular/core';
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

  navItems: NavItem[] = [
    { id: 'home', icon: 'home', label: 'Accueil', route: '' },
    { id: 'support', icon: 'headset', label: 'Support', route: 'support' },
    { id: 'wallet', icon: 'wallet', label: 'Wallet', route: 'wallet' },
    { id: 'profile', icon: 'user', label: 'Profil', route: 'profil' },
    { id: 'more', icon: 'ellipsis-h', label: 'Plus', route: 'plus' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveItemByRoute(this.router.url);
    });

    // Set initial active item based on current route
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
      this.activeItem = 'home'; // Default to home if no match found
    }
  }

  setActiveItem(id: string): void {
    this.activeItem = id;
  }
}