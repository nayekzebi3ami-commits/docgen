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

  async sendPurchaseInfo(userId: string, price: number, product: string): Promise<void> {
    try {
      const payload = { userId, price, product };
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
}
