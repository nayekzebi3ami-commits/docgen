import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private backendUrl = 'https://localhost:1338';
  
  constructor() { }
}
