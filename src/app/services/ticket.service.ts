import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private backendUrl = 'https://localhost:1338';

  constructor() { }

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
  
  async updateTicket(ticketId: string, message: string): Promise<boolean> {
    const payload = { ticketId, message };
    try {
      const response = await fetch(`${this.backendUrl}/Ticket-updateTicket`, {
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
