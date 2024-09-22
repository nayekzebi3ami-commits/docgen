import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private backendUrl = 'https://filou-8e89ba3f6799.herokuapp.com';

  constructor() { }

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
