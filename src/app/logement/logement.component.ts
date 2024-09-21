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
    { id: 1, title: 'Test alcolémie', price: 100, image: 'assets/product.jpg' },
    { id: 2, title: 'Test stupéfiant urinaire', price: 100, image: 'assets/product.jpg' },
    { id: 3, title: 'Test stupéfiant sanguin', price: 100, image: 'assets/product.jpg' },
    { id: 4, title: 'Tests psychotechniques', price: 100, image: 'assets/product.jpg' },
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
