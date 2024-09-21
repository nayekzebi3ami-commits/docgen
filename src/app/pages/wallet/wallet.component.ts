import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

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
  balance: number = 29600;
  transactions: any[] = [
    { date: '2024-03-20', description: 'Achat PCS', amount: -50 },
    { date: '2024-03-18', description: 'Recharge', amount: 100 },
    { date: '2024-03-15', description: 'Service premium', amount: -200 },
  ];

  showRechargeModal: boolean = false;

  ngOnInit() {
    this.animateValue('balance', 0, this.balance, 2000);
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

  rechargeWallet(amount: number) {
    this.balance += amount;
    this.transactions.unshift({ date: new Date().toISOString().split('T')[0], description: 'Recharge PCS', amount: amount });
    this.closeRechargeModal();
  }
}