import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrl: './diplome.component.scss'
})
export class DiplomeComponent {
  products: Product[] = [
    { id: 1, title: 'Baccalauréat général', price: 100, image: 'assets/product.jpg' },
    { id: 2, title: 'Baccalauréat professionnel', price: 100, image: 'assets/product.jpg' },
    { id: 3, title: 'Licence', price: 100, image: 'assets/product.jpg' },
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
