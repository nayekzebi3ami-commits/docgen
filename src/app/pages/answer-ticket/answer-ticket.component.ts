import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service'; // Assurez-vous d'importer le service

interface Message {
  sender: 'requester' | 'admin';
  message: string;
  date: any;
}

interface Ticket {
  id: string;
  title: string;
  desc: string;
  messages: Message[];
  status: 'open' | 'in_progress' | 'closed';
  createdAt: any; // Modifie ce type pour accepter à la fois Timestamp et Date
  updatedAt: any;
  userId: string;
}

@Component({
  selector: 'app-answer-ticket',
  templateUrl: './answer-ticket.component.html',
  styleUrl: './answer-ticket.component.scss',
})
export class AnswerTicketComponent implements OnInit {
  @Input() ticket: Ticket | null = null;
  @Input() admin: boolean = false;  // Indique si c'est l'admin qui voit la conversation

  newMessage = '';

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    // Convertir les objets Firestore Timestamp en objets Date
    if (this.ticket) {
      this.convertTicketDates(this.ticket);
    }
  }

  // Méthode pour envoyer un message
  async sendMessage(message: string) {
    this.ticket!.messages = Array.isArray(this.ticket?.messages) ? this.ticket.messages : [];

    if (message.trim() === '') return;

    const newMessage: Message = {
      sender: this.admin ? 'admin' : 'requester',
      message: message,
      date: new Date().toISOString()
    };

    // Ajouter le message localement
    this.ticket!.messages.push(newMessage);

    // Envoyer le message au backend
    await this.ticketService.addMessageToTicket(this.ticket!.id, message, this.admin ? 'admin' : 'requester');

    this.newMessage = '';
  }

  // Méthode pour fermer le ticket (administrateur seulement)
  async closeTicket() {
    if (!this.admin || !this.ticket) return;

    const result = await this.ticketService.closeTicket(this.ticket.id);
    if (result) {
      this.ticket.status = 'closed'; // Mettre à jour le statut localement si le ticket est fermé avec succès
    }
  }

  convertTicketDates(ticket: Ticket) {
    // Conversion des champs créés et mis à jour
    if (ticket.createdAt && ticket.createdAt._seconds) {
      ticket.createdAt = new Date(ticket.createdAt._seconds * 1000 + ticket.createdAt._nanoseconds / 1000000);
    }
    if (ticket.updatedAt && ticket.updatedAt._seconds) {
      ticket.updatedAt = new Date(ticket.updatedAt._seconds * 1000 + ticket.updatedAt._nanoseconds / 1000000);
    }

    // Initialiser messages s'il n'existe pas
    if (!ticket.messages) {
      ticket.messages = [];
    }

    // Conversion des dates dans les messages
    ticket.messages.forEach(message => {
      if (message.date && message.date._seconds) {
        message.date = new Date(message.date._seconds * 1000 + message.date._nanoseconds / 1000000);
      }
    });
  }

  // Utiliser trackBy pour éviter les problèmes d'affichage sur le *ngFor
  trackByMessage(index: number, message: Message) {
    return message.date; // Ou un identifiant unique si disponible
  }

  // Vérifie si c'est le message de l'utilisateur courant (admin ou requester)
  isCurrentUserMessage(message: Message): boolean {
    return this.admin ? message.sender === 'admin' : message.sender === 'requester';
  }

  // Vérifie si le message provient de l'autre utilisateur (l'opposé de isCurrentUserMessage)
  isOtherUserMessage(message: Message): boolean {
    return this.admin ? message.sender === 'requester' : message.sender === 'admin';
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'open':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'closed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }
}
