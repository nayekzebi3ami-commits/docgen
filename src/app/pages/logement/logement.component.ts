import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrl: './logement.component.scss'
})
export class LogementComponent {
  products: Product[] = [
    { id: 1, title: 'CDI SNCF', price: 100, image: 'assets/product.jpg' },
    { id: 2, title: 'CDI VENDEUR COMMERCIAL', price: 100, image: 'assets/product.jpg' },
    { id: 3, title: 'CDI PLOMBIER X', price: 100, image: 'assets/product.jpg' },
    { id: 4, title: 'CDI ELECTRICIEN X', price: 100, image: 'assets/product.jpg' },
    { id: 5, title: 'CDI ASSISTANT COMPTABLE X', price: 100, image: 'assets/product.jpg' },
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
