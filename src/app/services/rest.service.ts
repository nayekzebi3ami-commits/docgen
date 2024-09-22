import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private backendUrl: string;

  constructor() {
    this.backendUrl = environment.production ? 'https://production-backend-url.com' : 'http://localhost:1338';
  }
}
