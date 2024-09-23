import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private backendUrl = '';

  constructor(private restService: RestService) {
    this.backendUrl = this.restService.backendUrl;
  }

  async generateTestAlcolemie(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateTestAlcolemie`, {
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

  async generateTestStupefiantUrinaire(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateTestStupefiantUrinaire`, {
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

  async generateTestStupefiantSanguin(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateTestStupefiantSanguin`, {
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

  async generateTestPsychotechnique(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateTestPsychotechnique`, {
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
  async generateAssr2(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateAssr2`, {
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
  async generateJourneeAppel(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateJourneeAppel`, {
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

  async generateFactureSFR(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateFactureSFR`, {
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

  async generateCdiSNCF(form: Record<string, string>, userId: string): Promise<any> {
    const payload = { form, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-generateCdiSNCF`, {
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

  async getMyDocuments(userId: string): Promise<any> {
    const payload = { userId };
    try {
      const response = await fetch(`${this.backendUrl}/Documents-getMyDocuments`, {
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
