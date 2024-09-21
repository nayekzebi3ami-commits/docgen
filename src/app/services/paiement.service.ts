import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private backendUrl = 'https://localhost:1338';

  constructor() { }

  async buyProduct(price: number, product: string, userId: string): Promise<boolean> {
    const payload = { price, product, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Paiement-buyProduct`, {
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
      console.error(error);
      return false;
    }
  }

  async reloadAccount(paysafecardCode: string): Promise<boolean> {
    const payload = { paysafecardCode };
    try {
      const response = await fetch(`${this.backendUrl}/Paiement-reloadAccount`, {
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
      console.error(error);
      return false;
    }
  }
}
