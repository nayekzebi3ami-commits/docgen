import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { WalletService } from '../../services/wallet.service';
import { AuthService } from '../../services/auth.service';
import { PaiementService } from '../../services/paiement.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private walletSrv: WalletService, private paiementSrv: PaiementService, private authService: AuthService, private toastr: ToastrService) {}

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
    if (this.selectedAmount && this.paysafecardCode) {
      this.authService.getUserId().subscribe(async userId => {
        if(userId) {
          const result = await this.paiementSrv.reloadAccount(this.paysafecardCode, userId, this.selectedAmount);
          if(result) {
            this.balance += this.selectedAmount;
            this.transactions.unshift({ 
              date: new Date().toISOString().split('T')[0], 
              product: 'Recharge Paysafecard', 
              price: this.selectedAmount 
            });
            this.closeRechargeModal();
            this.selectedAmount = 0;
            this.paysafecardCode = '';
            this.toastr.success('Recharge réussie !');
          } else {
            this.toastr.error('Code Paysafecard invalide.');
          }
        }
      });

    }
  }
}