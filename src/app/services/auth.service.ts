import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backendUrl = 'https://localhost:1338';
  private userIdSubject = new BehaviorSubject<string | null>(null);

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService) {
    // Surveiller l'état de connexion de l'utilisateur
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userIdSubject.next(user.uid); // Mettre à jour l'ID utilisateur
      } else {
        this.userIdSubject.next(null); // Réinitialiser si déconnexion
      }
    });
  }

  // Méthode pour mapper les erreurs de Firebase
  handleFirebaseError(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Cet email est déjà utilisé.';
      case 'auth/invalid-email':
        return 'L\'adresse email est invalide.';
      case 'auth/user-not-found':
        return 'Utilisateur non trouvé.';
      case 'auth/wrong-password':
        return 'Le mot de passe est incorrect.';
      case 'auth/weak-password':
        return 'Le mot de passe est trop faible.';
      case 'auth/too-many-requests':
        return 'Trop de tentatives, veuillez réessayer plus tard.';
      default:
        return 'Une erreur s\'est produite, veuillez réessayer.';
    }
  }

  // Connexion via Firebase
  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.toastr.success('Connexion réussie');
    } catch (error: any) {
      const errorMessage = this.handleFirebaseError(error.code);
      this.toastr.error(errorMessage, 'Erreur de connexion');
      throw new Error(errorMessage);
    }
  }

  // Inscription via Firebase
  async register(email: string, password: string, username: string): Promise<boolean> {
    const payload = { email, password, username }; // Données envoyées au backend
    try {
      const response = await fetch(`${this.backendUrl}/Auth-register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error: unknown) {
      const errorMessage = this.handleFirebaseError(error instanceof Error ? error.message : 'default');
      this.toastr.error(errorMessage, 'Erreur d\'inscription');
      throw new Error(errorMessage);
    }
  }

  getUserId() {
    return this.userIdSubject.asObservable();
  }

  // Méthode pour récupérer l'ID utilisateur actuel (non observable)
  getCurrentUserId(): string | null {
    return this.userIdSubject.value;
  }
}