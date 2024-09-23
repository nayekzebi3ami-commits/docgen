import { Component } from '@angular/core';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  enabled: boolean;
}

@Component({
  selector: 'app-justificatif-de-domicile',
  templateUrl: './justificatif-de-domicile.component.html',
  styleUrl: './justificatif-de-domicile.component.scss'
})
export class JustificatifDeDomicileComponent {
  products: Product[] = [
    { id: 1, title: 'Facture SFR', price: 100, image: 'assets/product.jpg', enabled: true },
    { id: 2, title: 'Facture EDF', price: 100, image: 'assets/product.jpg', enabled: false },
    { id: 3, title: 'Facture ORANGE', price: 100, image: 'assets/product.jpg', enabled: false },
    { id: 4, title: 'Quittance de loyer', price: 100, image: 'assets/product.jpg', enabled: false },
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
