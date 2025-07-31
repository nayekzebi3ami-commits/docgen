import { Component } from '@angular/core';

interface Category {
  id: 'cdi' | 'fiche_paie' | 'pack_logement';
  title: string;
  image: string;
  enabled: boolean;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  enabled: boolean;
  category: 'cdi' | 'fiche_paie' | 'pack_logement';
}

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrl: './logement.component.scss'
})
export class LogementComponent {
  selectedCategory: 'cdi' | 'fiche_paie' | 'pack_logement' | null = null;

  categories: Category[] = [
    { id: 'cdi', title: 'CDI', image: 'assets/sncf.jpg', enabled: true },
    { id: 'fiche_paie', title: 'Fiche de paie', image: 'assets/1-month.jpg', enabled: false },
    { id: 'pack_logement', title: 'Pack Logement', image: 'assets/1-month.jpg', enabled: false }
  ];

  products: Product[] = [
    { id: 1, title: 'CDI SNCF', price: 100, image: 'assets/sncf.jpg', enabled: true, category: 'cdi' },
    { id: 2, title: 'CDI DÉVELOPPEUR WEB', price: 100, image: 'assets/vendeur.jpg', enabled: true, category: 'cdi' },
    { id: 3, title: 'CDI LIVREUR', price: 100, image: 'assets/plombier.jpg', enabled: true, category: 'cdi' },
    { id: 4, title: 'CDI PLOMBIER', price: 100, image: 'assets/elec.jpg', enabled: true, category: 'cdi' },
    { id: 5, title: 'CDI ASSISTANT COMPTABLE', price: 100, image: 'assets/compta.jpg', enabled: false, category: 'cdi' }
  ];

  selectedProduct: Product | null = null;
  showPaymentModal = false;
  walletBalance = 500000;

  getCategoryTitle(): string {
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category ? category.title : '';
  }

  selectCategory(categoryId: 'cdi' | 'fiche_paie' | 'pack_logement'): void {
    this.selectedCategory = this.selectedCategory === categoryId ? null : categoryId;
  }

  getFilteredProducts(): Product[] {
    return this.selectedCategory
      ? this.products.filter(product => product.category === this.selectedCategory)
      : [];
  }

  openPaymentModal(product: Product): void {
    this.selectedProduct = product;
    this.showPaymentModal = true;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.selectedProduct = null;
  }

  purchaseProduct(): void {
    if (this.selectedProduct && this.walletBalance >= this.selectedProduct.price) {
      this.walletBalance -= this.selectedProduct.price;
      this.closePaymentModal();
    }
  }
}