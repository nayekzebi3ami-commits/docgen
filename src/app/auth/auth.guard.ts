import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1), // Ne prend qu'une seule valeur puis se désinscrit
      map(user => {
        if (user) {
          return true; // L'utilisateur est connecté
        } else {
          this.router.navigate(['/login']); // Redirige vers la page de connexion
          return false; // L'utilisateur n'est pas connecté
        }
      })
    );
  }
}
