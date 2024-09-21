import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.scss'
})
export class PartenaireComponent {
  products: Product[] = [
    { id: 1, title: 'Devenir partenaire (1 mois)', price: 350, image: 'assets/product.jpg' },
    { id: 2, title: 'Devenir partenaire (3 mois)', price: 900, image: 'assets/product.jpg' },
    { id: 3, title: 'Devenir partenaire (6 mois)', price: 1500, image: 'assets/product.jpg' }
  ];

  selectedProduct: Product | null = null;
  showPaymentModal = false;
  walletBalance = 500; // Exemple de solde

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
      // Logique d'achat ici
      console.log(`Achat effectué : ${this.selectedProduct.title}`);
      this.closePaymentModal();
    } else {
      console.log('Solde insuffisant');
      // Gérer l'erreur de solde insuffisant
    }
  }
}
