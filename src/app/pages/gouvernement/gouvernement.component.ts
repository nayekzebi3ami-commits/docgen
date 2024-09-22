import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-gouvernement',
  templateUrl: './gouvernement.component.html',
  styleUrl: './gouvernement.component.scss'
})
export class GouvernementComponent {
  products: Product[] = [
    { id: 1, title: 'Journée d\'appel ', price: 100, image: 'assets/product.jpg' },
    { id: 2, title: 'ASSR 2', price: 100, image: 'assets/product.jpg' },
    { id: 3, title: 'ASSR 1 X', price: 100, image: 'assets/product.jpg' },
    { id: 4, title: 'Attestation de recensement X', price: 100, image: 'assets/product.jpg' },
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
