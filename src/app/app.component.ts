import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'filou';

  isLoggedIn: boolean = false; // État de connexion

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    // Surveiller l'état de connexion de l'utilisateur
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        console.log('User is logged in');
      } else {
        this.isLoggedIn = false;
        console.log('User is not logged in');
        this.router.navigate(['/login']); // Rediriger vers la page de connexion si non connecté
      }
    });
  }
}
