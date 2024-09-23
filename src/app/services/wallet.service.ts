import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private backendUrl = '';

  constructor(private restService: RestService) {
    this.backendUrl = this.restService.backendUrl;
  }

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

  async getAccountLevel(userId: string): Promise<'basic' | 'premium' | 'admin'> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Wallet-getAccountLevel`, {
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
      return 'basic';
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

  async getLastTransactionAdmin(userId: string): Promise<any> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Wallet-getLastTransactionAdmin`, {
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

  async isSubscribed(userId: string): Promise<boolean> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Wallet-isSubscribed`, {
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
