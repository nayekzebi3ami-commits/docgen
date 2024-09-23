import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {
  private backendUrl = '';

  constructor(private restService: RestService) {
    this.backendUrl = this.restService.backendUrl;
  }

  async acceptCode(code: string): Promise<boolean> {
    try {
      const payload = { code };
      const response = await fetch(`${this.backendUrl}/Recharge-acceptCode`, {
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

  async refuseCode(code: string): Promise<boolean> {
    try {
      const payload = { code };
      const response = await fetch(`${this.backendUrl}/Recharge-acceptCode`, {
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
