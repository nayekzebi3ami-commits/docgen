import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfilService } from '../../services/profil.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { TicketService } from '../../services/ticket.service';
import { WalletService } from '../../services/wallet.service'; // Import du service WalletService

interface Ticket {
  id: string;
  title: string;
  desc: string;
  messages: Message[];
  status: 'open' | 'in_progress' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

interface Message {
  sender: 'requester' | 'admin';
  message: string;
  date: string;
}

interface Purchase {
  id: string;
  user: string;
  product: string;
  price: number;
  createdAt: string;
  accountLevel: 'basic' | 'premium' | 'admin';
}

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AdministrationComponent implements OnInit {
  activeView: 'tickets' | 'purchases' = 'tickets';
  selectedTicket: Ticket | null = null;
  tickets: Ticket[] = [];
  purchases: Purchase[] = []; // Modification pour refléter la structure des transactions

  constructor(
    private authService: AuthService,
    private profilSrv: ProfilService,
    private router: Router,
    private ticketService: TicketService,
    private walletSrv: WalletService // Injection du service WalletService
  ) { }

  ngOnInit(): void {
    this.authService.getUserId().subscribe(async (userId) => {
      if (userId) {
        const profil = await this.profilSrv.getMyInfo(userId);
        if (!profil.admin) {
          this.router.navigate(['/']);
        } else {
          // Récupérer les tickets et transactions pour l'administrateur
          this.loadTickets(userId);
          this.loadTransactions(userId); // Charger les transactions
        }
      }
    });
  }

  // Récupérer les tickets d'administration
  async loadTickets(userId: string) {
    try {
      this.tickets = await this.ticketService.getMyTicketsAdmin(userId); // Utilisation du service pour récupérer les tickets
    } catch (error) {
      console.error('Erreur lors de la récupération des tickets :', error);
    }
  }

  // Nouvelle méthode pour récupérer les transactions d'administration
  async loadTransactions(userId: string) {
    try {
      const transactions = await this.walletSrv.getLastTransactionAdmin(userId);
      this.purchases = transactions.transactions.map((trx: any) => ({
        id: trx.id,
        user: trx.user,
        product: trx.product,
        price: trx.price,
        createdAt: trx.createdAt,
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des transactions :', error);
    }
  }

  setView(view: 'tickets' | 'purchases') {
    this.activeView = view;
    this.selectedTicket = null;
  }

  selectTicket(ticket: Ticket) {
    this.selectedTicket = ticket;
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
