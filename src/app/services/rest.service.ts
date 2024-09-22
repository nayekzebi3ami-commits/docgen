import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public backendUrl: string;

  constructor() {
    this.backendUrl = environment.production ? 'https://filou-8e89ba3f6799.herokuapp.com' : 'http://localhost:1338';
  }
}
