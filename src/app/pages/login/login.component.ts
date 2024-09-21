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

  constructor(private authService: AuthService, private router: Router) { }

  // Méthode pour basculer entre le mode connexion et inscription
  flipCard() {
    const flipCard = document.querySelector('.flip-card');
    flipCard?.classList.toggle('flipped');
    this.isLoginMode = !this.isLoginMode; // Bascule entre connexion et inscription
  }

  // Gérer la soumission du formulaire
  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = this.email;
    const password = this.password;

    if (this.isLoginMode) {
      try {
        await this.authService.login(email, password);
        this.router.navigate(['/']); // Redirige après connexion réussie
      } catch (error) {
        console.error('Login error:', error);
      }
    } else {
      const username = this.username;
      try {
        await this.authService.register(email, password, username);
        this.router.navigate(['/login']); // Redirige après inscription réussie
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  }
}
