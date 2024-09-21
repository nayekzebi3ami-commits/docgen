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
    { id: 1, title: 'Produit Premium', price: 99.99, image: 'assets/product.jpg' },
    { id: 2, title: 'Service VIP', price: 149.99, image: 'assets/product.jpg' },
    { id: 3, title: 'Pack Exclusif', price: 199.99, image: 'assets/product.jpg' },
    { id: 4, title: 'Abonnement Elite', price: 79.99, image: 'assets/product.jpg' },
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
