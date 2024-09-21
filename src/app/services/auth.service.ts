import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Utiliser AngularFire pour Firebase Auth
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backendUrl = 'http://localhost:1338'; // Remplacez par votre URL backend

  constructor(private afAuth: AngularFireAuth, private http: HttpClient) {}

  // Login avec Firebase
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Register via votre backend
  register(email: string, password: string, username: string): Observable<any> {
    const payload = { email, password, username };
    return this.http.post(`${this.backendUrl}/register`, payload); // Appel à votre backend
  }

  // Déconnexion
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
