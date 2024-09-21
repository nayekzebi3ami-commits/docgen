import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';

interface Ticket {
  id: string;
  title: string;
  status: 'open' | 'in_progress' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrl: './my-tickets.component.scss'
})
export class MyTicketsComponent implements OnInit {
  private userId?: string;
  tickets: Ticket[] = [];

  showCreateTicketModal = false;

  constructor(private authService: AuthService, private ticketSrv: TicketService) { }

  ngOnInit(): void {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.userId = userId;
        this.tickets = await this.ticketSrv.getMyTickets(userId);
      }
    });
  }

  openCreateTicketModal() {
    this.showCreateTicketModal = true;
  }

  closeCreateTicketModal() {
    this.showCreateTicketModal = false;
  }

  async createTicket(title: string, description: string) {
    // Ici, vous implémenteriez la logique pour créer un nouveau ticket
    console.log(`Creating ticket: ${title}`);
    this.closeCreateTicketModal();
    if (this.userId) {
      const result = await this.ticketSrv.createTicket(title, description, this.userId)
      if (result) {
        this.tickets.unshift({
          id: result,
          title,
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'open':
        return 'bg-yellow-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'closed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }
}
