import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private backendUrl = 'https://filou-8e89ba3f6799.herokuapp.com';

  constructor() { }

  async changeProfilePicture(photo: string, userId: string, type: string): Promise<boolean> {
    const payload = { photo, userId, type };
    try {
      const response = await fetch(`${this.backendUrl}/Profil-changeProfilePicture`, {
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

  async changeProfileData(password: string, username: string, email: string, userId: string): Promise<boolean> {
    const payload = { password, username, email, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Profil-changeProfileData`, {
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

  async changePassword(previousPw: string, newPw: string): Promise<boolean> {
    const payload = { previousPw, newPw };
    try {
      const response = await fetch(`${this.backendUrl}/Profil-changePassword`, {
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

  async getMyInfo(userId: string): Promise<any> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Profil-getMyInfo`, {
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
