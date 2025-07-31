import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public backendUrl: string;

  constructor() {
    this.backendUrl = environment.production ? 'https://196.251.83.4' : 'http://localhost:1338';
  }
}




