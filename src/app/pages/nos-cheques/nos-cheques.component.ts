import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-nos-cheques',
  templateUrl: './nos-cheques.component.html',
  styleUrl: './nos-cheques.component.scss'
})
export class NosChequesComponent {
  products: Product[] = [
    { id: 1, title: 'Chèque de banque (x1)', price: 1000, image: 'assets/bank.jpg' },
    { id: 2, title: 'Chèque bancaire (x3)', price: 500, image: 'assets/bank.jpg' },
    { id: 3, title: 'Chèque pro (x3)', price: 700, image: 'assets/pro.jpg' },
    { id: 4, title: 'Chèque super pro (x1)', price: 800, image: 'assets/super-pro.jpg' },
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
