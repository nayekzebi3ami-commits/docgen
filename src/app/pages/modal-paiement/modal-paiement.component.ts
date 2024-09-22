import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PaiementService } from '../../services/paiement.service';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from '../../services/wallet.service';
import { TelegramService } from '../../services/telegram.service';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CouponMessage {
  text: string;
  type: 'success' | 'error';
}

@Component({
  selector: 'app-modal-paiement',
  templateUrl: './modal-paiement.component.html',
  styleUrl: './modal-paiement.component.scss'
})
export class ModalPaiementComponent implements OnInit {
  @Input() product!: Product;
  walletBalance: number = 0;
  @Output() close = new EventEmitter<void>();
  @Output() purchase = new EventEmitter<number>();

  titles: any[] = [
    { title: 'Test alcolémie', form: 'test_alcolemie' },
    { title: 'Test stupéfiant urinaire', form: 'test_stup_urinaire' },
    { title: 'Test stupéfiant sanguin', form: 'test_stup_sanguin' },
    { title: 'Tests psychotechniques', form: 'test_psycho' },
    { title: 'ASSR 2', form: 'assr_2' },
    { title: 'Journée d\'appel', form: 'journee_appel' },
  ];

  couponCode: string = '';
  discountedPrice: number | null = null;
  couponMessage: CouponMessage | null = null;
  protected isSubscribed: boolean = false;
  isLoading: boolean = true;
  showDataInputModal = false;
  formType: string = ''; // Nouvelle propriété pour identifier le formulaire
  documentReady: boolean = false; // Nouveau flag pour indiquer que le document est prêt

  constructor(private authService: AuthService, private paiementSrv: PaiementService, private toastr: ToastrService, private walletSrv: WalletService, private telegramSrv: TelegramService) { }

  ngOnInit(): void {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.walletBalance = await this.walletSrv.getMyWalletAmount(userId);
        const isPartnerSubscription = ['Devenir partenaire (1 mois)', 'Devenir partenaire (3 mois)', 'Devenir partenaire (6 mois)'].includes(this.product.title);
        if (!isPartnerSubscription) {
          this.isSubscribed = await this.walletSrv.isSubscribed(userId);
        }
        this.isLoading = false;
      }
    });
  }

  closeModal() {
    this.close.emit();
  }

  confirmPurchase() {
    const finalPrice = this.discountedPrice !== null ? this.discountedPrice : this.product.price;
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        const result = await this.paiementSrv.buyProduct(finalPrice, this.product.title, this.isSubscribed, userId);
        const telegramResult = await this.telegramSrv.sendPurchaseInfo(userId, this.product.price, this.product.title)
        if (result) {
          this.toastr.success('Achat effectué avec succès !', 'Succès');
          if (!this.product.title.includes('Devenir partenaire')) {
            this.setFormType(); // Définir le type de formulaire
            this.showDataInputModal = true;
          } else {
            this.purchase.emit(finalPrice);
            this.closeModal();
          }
        } else {
          this.toastr.error('Erreur lors de l\'achat.', 'Erreur');
        }
      }
    });
  }

  setFormType() {
    const formMapping = this.titles.find(item => item.title === this.product.title);
    this.formType = formMapping ? formMapping.form : 'default';
  }

  applyCoupon() {
    // Simulons une vérification de coupon
    if (this.couponCode.toLowerCase() === 'discount10') {
      this.discountedPrice = this.product.price * 0.9; // 10% de réduction
      this.couponMessage = { text: 'Coupon appliqué avec succès !', type: 'success' };
    } else {
      this.discountedPrice = null;
      this.couponMessage = { text: 'Code de réduction invalide.', type: 'error' };
    }
  }

  // Gestion de la fermeture du modal de saisie des données
  onModalClose() {
    this.showDataInputModal = false;
    this.closeModal(); // Fermer la modal principale également
  }

  // Méthode appelée lors de la soumission du formulaire dans ModalGenerateDocComponent
  onFormSubmit(formData: any) {
    console.log('Données du formulaire reçues:', formData);
  }

  // Méthode appelée quand le document a été généré
  onDocumentGenerated() {
    this.toastr.success('Document généré avec succès!', 'Succès');
    this.documentReady = true; // Le document est prêt
  }

  // Méthode appelée quand l'utilisateur télécharge le fichier
  onDownloadCompleted() {
    this.toastr.success('Document téléchargé avec succès!', 'Succès');
    this.showDataInputModal = false; // Fermer le modal de saisie de données
    this.closeModal(); // Fermer le modal parent
  }
}