import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public backendUrl: string;

  constructor() {
    this.backendUrl = environment.production ? 'https://filou-backend-a852d7f3542b.herokuapp.com' : 'http://localhost:1338';
  }
}




