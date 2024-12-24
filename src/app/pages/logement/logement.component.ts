import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  enabled: boolean;
}

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrl: './logement.component.scss'
})
export class LogementComponent {
  products: Product[] = [
    { id: 1, title: 'CDI SNCF', price: 100, image: 'assets/sncf.jpg', enabled: true },
    { id: 2, title: 'CDI VENDEUR COMMERCIAL', price: 100, image: 'assets/vendeur.jpg', enabled: false },
    { id: 3, title: 'CDI PLOMBIER', price: 100, image: 'assets/plombier.jpg', enabled: false },
    { id: 4, title: 'CDI ELECTRICIEN', price: 100, image: 'assets/elec.jpg', enabled: false },
    { id: 5, title: 'CDI ASSISTANT COMPTABLE', price: 100, image: 'assets/compta.jpg', enabled: false },
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
