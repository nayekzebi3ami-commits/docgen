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
    console.log("backendUrl: ", this.backendUrl);
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

  // async generateTestPsychotechnique(form: Record<string, string>, userId: string): Promise<string> {
  //   const payload = { form, userId };
  //   try {
  //     const response = await fetch(`${this.backendUrl}/Documents-generateTestPsychotechnique`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     // Récupérer la réponse en tant que Blob (fichier binaire)
  //     const blob = await response.blob();

  //     // Créer une URL pour le Blob
  //     const url = window.URL.createObjectURL(blob);
  //     return url; // Retourner l'URL du fichier
  //   } catch (error: unknown) {
  //     console.error('Erreur lors de la génération du document :', error);
  //     throw error; // Relancer l'erreur pour la gérer dans le composant
  //   }
  // }

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
