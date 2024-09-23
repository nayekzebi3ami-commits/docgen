import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';
import { TelegramService } from '../../services/telegram.service';
import { ProfilService } from '../../services/profil.service';
import { WalletService } from '../../services/wallet.service';

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
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrl: './my-tickets.component.scss'
})
export class MyTicketsComponent implements OnInit {
  private userId?: string;
  tickets: Ticket[] = [];
  selectedTicket: Ticket | null = null;

  showCreateTicketModal = false;

  constructor(private authService: AuthService, private ticketSrv: TicketService, private telegramSrv: TelegramService, private profilSrv: ProfilService, private walletSrv: WalletService) { }

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
    console.log(`Creating ticket: ${title}`);
    this.closeCreateTicketModal();
    if (this.userId) {
      const result = await this.ticketSrv.createTicket(title, description, this.userId);
      const pseudo = await this.profilSrv.getUserPseudo(this.userId);
      const accountLevel = await this.walletSrv.getAccountLevel(this.userId);
      if (result) {
        this.tickets.unshift({
          id: result,
          title,
          desc: description,
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: this.userId,
          messages: []
        });
        await this.telegramSrv.sendTicketInfo(pseudo, 'Nouveau ticket', accountLevel);
      }
    }
  }

  openTicket(ticket: Ticket) {
    this.selectedTicket = ticket;
    console.log(this.selectedTicket)
  }

  async onReply(message: string) {
    if (this.selectedTicket && this.userId) {
      // Ajouter le nouveau message dans la conversation
      const newMessage: Message = {
        sender: 'requester',
        message,
        date: new Date().toISOString()
      };
      this.selectedTicket.messages.push(newMessage);

      const pseudo = await this.profilSrv.getUserPseudo(this.userId);
      const accountLevel = await this.walletSrv.getAccountLevel(this.userId);
      await this.telegramSrv.sendTicketInfo(pseudo, 'Nouveau message', accountLevel);
      // Appeler le service pour envoyer le message au backend
      // await this.ticketSrv.sendMessage(this.selectedTicket.id, newMessage);
    }
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
