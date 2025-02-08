import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  username: string = ''; // Seulement utilisé pour l'inscription
  isLoginMode: boolean = true; // Mode login par défaut
  isLoading: boolean = false; // Nouvelle variable pour l'état de chargement

  constructor(private authService: AuthService, private router: Router) { }

  // Méthode pour basculer entre le mode connexion et inscription
  flipCard() {
    const flipCard = document.querySelector('.flip-card');
    flipCard?.classList.toggle('flipped');
    this.isLoginMode = !this.isLoginMode; // Bascule entre connexion et inscription
  }

  // Gérer la soumission du formulaire
  async onSubmit(form: NgForm) {

    if (!form.valid || this.isLoading) { // Vérifier si déjà en chargement
      return;
    }

    this.isLoading = true; // Activer l'état de chargement


    try {
      if (this.isLoginMode) {
        await this.authService.login(this.email, this.password);
        await this.router.navigate(['/']);
      } else {
        const success = await this.authService.register(this.email, this.password, this.username);
        if (success) {
          // L'utilisateur est déjà créé dans Firebase, on le connecte directement
          await this.authService.login(this.email, this.password);
          await this.router.navigate(['/']);
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      this.isLoading = false; // Désactiver l'état de chargement
    }
  }
}
