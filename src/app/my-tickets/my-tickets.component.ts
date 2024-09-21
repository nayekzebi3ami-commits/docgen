import { Component } from '@angular/core';

interface Ticket {
  id: number;
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
export class MyTicketsComponent {
  tickets: Ticket[] = [
    { id: 1, title: 'Problème de connexion', status: 'open', createdAt: new Date('2024-03-18'), updatedAt: new Date('2024-03-18') },
    { id: 2, title: 'Erreur de paiement', status: 'in_progress', createdAt: new Date('2024-03-15'), updatedAt: new Date('2024-03-17') },
    { id: 3, title: 'Demande de remboursement', status: 'closed', createdAt: new Date('2024-03-10'), updatedAt: new Date('2024-03-12') },
  ];

  showCreateTicketModal = false;

  openCreateTicketModal() {
    this.showCreateTicketModal = true;
  }

  closeCreateTicketModal() {
    this.showCreateTicketModal = false;
  }

  createTicket(title: string, description: string) {
    // Ici, vous implémenteriez la logique pour créer un nouveau ticket
    console.log(`Creating ticket: ${title}`);
    this.closeCreateTicketModal();
    // Après création, vous ajouteriez le nouveau ticket à la liste
    this.tickets.unshift({
      id: this.tickets.length + 1,
      title,
      status: 'open',
      createdAt: new Date(),
      updatedAt: new Date()
    });
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
