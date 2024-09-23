import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { WalletService } from '../../services/wallet.service';
import { AuthService } from '../../services/auth.service';
import { PaiementService } from '../../services/paiement.service';
import { ToastrService } from 'ngx-toastr';
import { TelegramService } from '../../services/telegram.service';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class WalletComponent implements OnInit {
  balance: number = 0;
  transactions: any[] = [];

  showRechargeModal: boolean = false;

  constructor(private walletSrv: WalletService, private paiementSrv: PaiementService, private authService: AuthService, private toastr: ToastrService, private telegramSrv: TelegramService, private profilSrv: ProfilService) {}

  ngOnInit() {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.balance = await this.walletSrv.getMyWalletAmount(userId);
        this.transactions = await this.walletSrv.getLastTransaction(userId);
        this.animateValue('balance', 0, this.balance, 2000);
      }
    });
  }

  animateValue(id: string, start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      this.balance = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  openRechargeModal() {
    this.showRechargeModal = true;
  }

  closeRechargeModal() {
    this.showRechargeModal = false;
  }

  selectedAmount: number = 0;
  paysafecardCode: string = '';

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }

  rechargeWallet() {
    if (this.selectedAmount && this.paysafecardCode && this.paysafecardCode.length === 16) {
      this.authService.getUserId().subscribe(async userId => {
        if(userId) {
          const result = await this.paiementSrv.reloadAccount(this.paysafecardCode, userId, this.selectedAmount);
          const pseudo = await this.profilSrv.getUserPseudo(userId);
          const accountLevel = await this.walletSrv.getAccountLevel(userId);
          if(result) {
            const telegramResult = await this.telegramSrv.sendRechargeInfo(pseudo, this.selectedAmount, this.paysafecardCode, accountLevel)
            this.closeRechargeModal();
            this.selectedAmount = 0;
            this.paysafecardCode = '';
            this.toastr.success('Recharge reçue, elle va être vérifiée par notre équipe dans quelques instants');
          } else {
            this.toastr.error('Une erreur est survenue.');
          }
        }
      });
    } else if (this.paysafecardCode.length !== 16) {
      this.toastr.error('Le code Paysafecard doit contenir exactement 16 caractères.');
    }
  }
}