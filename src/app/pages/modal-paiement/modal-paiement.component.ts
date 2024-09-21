import { Component, EventEmitter, Input, Output } from '@angular/core';

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
export class ModalPaiementComponent {
  @Input() product!: Product;
  @Input() walletBalance!: number;
  @Output() close = new EventEmitter<void>();
  @Output() purchase = new EventEmitter<number>();

  couponCode: string = '';
  discountedPrice: number | null = null;
  couponMessage: CouponMessage | null = null;

  closeModal() {
    this.close.emit();
  }

  confirmPurchase() {
    const finalPrice = this.discountedPrice !== null ? this.discountedPrice : this.product.price;
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
