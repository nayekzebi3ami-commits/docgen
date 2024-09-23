import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private backendUrl = '';

  constructor(private restService: RestService) {
    this.backendUrl = this.restService.backendUrl;
  }

  async sendPurchaseInfo(userId: string, price: number, product: string, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, product, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendPurchaseInfo`, {
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
      return;
    }
  }

  async sendRechargeInfo(userId: string, amount: number, code: string, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, amount, code, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendRechargeInfo`, {
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
      return;
    }
  }

  async sendCustomChequeBancaireInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomChequeBancaireInfo`, {
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
      return;
    }
  }

  async sendCustomChequeBanqueInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomChequeBanqueInfo`, {
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
      return;
    }
  }

  async sendCustomChequeProInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomChequeProInfo`, {
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
      return;
    }
  }

  async sendCustomChequeSuperProInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomChequeSuperProInfo`, {
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
      return;
    }
  }

  async sendCustomCarteIdentiteInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomCarteIdentiteInfo`, {
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
      return;
    }
  }

  async sendCustomPermisInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomPermisInfo`, {
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
      return;
    }
  }

  async sendCustomPasseportInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomPasseportInfo`, {
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
      return;
    }
  }

  async sendCustomVisaInfo(userId: string, price: number, data: any, accountLevel: 'basic' | 'premium' | 'admin'): Promise<void> {
    try {
      const payload = { userId, price, data, accountLevel };
      const response = await fetch(`${this.backendUrl}/Telegram-sendCustomVisaInfo`, {
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
      return;
    }
  }
}
