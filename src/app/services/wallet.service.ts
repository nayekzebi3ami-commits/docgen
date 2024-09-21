import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private backendUrl = 'https://localhost:1338';

  constructor() { }

  async getMyWalletAmount(userId: string): Promise<number> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Wallet-getMyWalletAmount`, {
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
      return 0;
    }
  }

  async getMyTotalOrders(userId: string): Promise<number> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Wallet-getMyTotalOrders`, {
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
      return 0;
    }
  }

  async getLastTransaction(userId: string): Promise<any> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Wallet-getLastTransaction`, {
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
      return undefined;
    }
  }
}
