import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  enabled: boolean;
}

@Component({
  selector: 'app-pare-brise',
  templateUrl: './pare-brise.component.html',
  styleUrl: './pare-brise.component.scss'
})
export class PareBriseComponent {
  products: Product[] = [
    { id: 1, title: 'Remboursement pare brise', price: 50, image: 'assets/product.jpg', enabled: true },
  ];

  selectedProduct: Product | null = null;
  showPaymentModal = false;
  walletBalance = 500000; // Exemple de solde

  openPaymentModal(product: Product) {
    this.selectedProduct = product;
    this.showPaymentModal = true;
  }

  closePaymentModal() {
    this.showPaymentModal = false;
    this.selectedProduct = null;
  }

  purchaseProduct() {
    if (this.selectedProduct && this.walletBalance >= this.selectedProduct.price) {
      this.walletBalance -= this.selectedProduct.price;
      console.log(`Achat effectué : ${this.selectedProduct.title}`);
      this.closePaymentModal();
    } else {
      console.log('Solde insuffisant');
    }
  }
}
