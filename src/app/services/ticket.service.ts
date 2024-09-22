import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private backendUrl = '';

  constructor(private restService: RestService) {
    this.backendUrl = this.restService.backendUrl;
  }

  async createTicket(title: string, message: string, userId: string): Promise<string | undefined> {
    const payload = { title, message, userId };
    try {
      const response = await fetch(`${this.backendUrl}/Ticket-createTicket`, {
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

  async getMyTickets(userId: string): Promise<any[]> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Ticket-getMyTickets`, {
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
      return [];
    }
  }

  async getMyTicketsAdmin(userId: string): Promise<any[]> {
    try {
      const payload = { userId };
      const response = await fetch(`${this.backendUrl}/Ticket-getMyTicketsAdmin`, {
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
      return [];
    }
  }

  async addMessageToTicket(ticketId: string, message: string, user: 'requester' | 'admin'): Promise<any[]> {
    try {
      const payload = { ticketId, message, user };
      const response = await fetch(`${this.backendUrl}/Ticket-addMessageToTicket`, {
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
      return [];
    }
  }

  async closeTicket(ticketId: string): Promise<boolean> {
    const payload = { ticketId };
    try {
      const response = await fetch(`${this.backendUrl}/Ticket-closeTicket`, {
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
