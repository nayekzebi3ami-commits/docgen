import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrl: './autres.component.scss'
})
export class AutresComponent {
  products: Product[] = [
    { id: 1, title: 'Chèque bancaire (x3)', price: 500, image: 'assets/product.jpg' },
    { id: 2, title: 'Chèque pro (x3)', price: 700, image: 'assets/product.jpg' },
    { id: 2, title: 'Chèque super pro (x1)', price: 800, image: 'assets/product.jpg' },
    { id: 2, title: 'Chèque de banque (x1)', price: 1000, image: 'assets/product.jpg' },
    { id: 3, title: 'Carte d\'identité', price: 1500, image: 'assets/product.jpg' },
    { id: 4, title: 'Permis', price: 1500, image: 'assets/product.jpg' },
    { id: 4, title: 'Passeport', price: 3500, image: 'assets/product.jpg' },
    { id: 4, title: 'Visa', price: 3500, image: 'assets/product.jpg' },
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
