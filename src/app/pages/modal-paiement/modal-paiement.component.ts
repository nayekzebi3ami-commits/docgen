import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PaiementService } from '../../services/paiement.service';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from '../../services/wallet.service';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CouponMessage {
  text: string;
  type: 'success' | 'error';
}

@Component({
  selector: 'app-modal-paiement',
  templateUrl: './modal-paiement.component.html',
  styleUrl: './modal-paiement.component.scss'
})
export class ModalPaiementComponent implements OnInit {
  @Input() product!: Product;
  walletBalance: number = 0;
  @Output() close = new EventEmitter<void>();
  @Output() purchase = new EventEmitter<number>();

  couponCode: string = '';
  discountedPrice: number | null = null;
  couponMessage: CouponMessage | null = null;

  constructor(private authService: AuthService, private paiementSrv: PaiementService, private toastr: ToastrService, private walletSrv: WalletService) {}

  ngOnInit(): void {
    this.authService.getUserId().subscribe(async userId => {
      if(userId) {
        this.walletBalance = await this.walletSrv.getMyWalletAmount(userId);
      }
    });
  }

  closeModal() {
    this.close.emit();
  }

  confirmPurchase() {
    const finalPrice = this.discountedPrice !== null ? this.discountedPrice : this.product.price;
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        const result = await this.paiementSrv.buyProduct(finalPrice, this.product.title, userId);
        if(result) {
          this.toastr.success('Achat effectué avec succès !', 'Succès');
        } else {
          this.toastr.error('Erreur lors de l\'achat.', 'Erreur');
        }
      }
    });
    this.purchase.emit(finalPrice);
  }

  applyCoupon() {
    // Simulons une vérification de coupon
    if (this.couponCode.toLowerCase() === 'discount10') {
      this.discountedPrice = this.product.price * 0.9; // 10% de réduction
      this.couponMessage = { text: 'Coupon appliqué avec succès !', type: 'success' };
    } else {
      this.discountedPrice = null;
      this.couponMessage = { text: 'Code de réduction invalide.', type: 'error' };
    }
  }
}
