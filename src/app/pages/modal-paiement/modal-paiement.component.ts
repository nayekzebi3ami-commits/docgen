import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PaiementService } from '../../services/paiement.service';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from '../../services/wallet.service';
import { TelegramService } from '../../services/telegram.service';
import { ProfilService } from '../../services/profil.service';

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
    { title: 'Facture SFR', form: 'facture_sfr' },
    { title: 'CDI SNCF', form: 'cdi_sncf' },
  ];

  customTitles: any[] = [
    { title: 'Chèque bancaire (x3)', form: 'cheque_bancaire' },
    { title: 'Chèque pro (x3)', form: 'cheque_pro' },
    { title: 'Chèque super pro (x1)', form: 'cheque_super_pro' },
    { title: 'Chèque de banque (x1)', form: 'cheque_de_banque' },
    { title: 'Carte d\'identité', form: 'carte_identite' },
    { title: 'Permis', form: 'permis' },
    { title: 'Passeport', form: 'passeport' },
    { title: 'Visa', form: 'visa' },
    { title: 'Contravention', form: 'amende' },
    { title: 'Remboursement pare brise', form: 'pare_brise' },
  ]

  couponCode: string = '';
  discountedPrice: number | null = null;
  couponMessage: CouponMessage | null = null;
  protected isSubscribed: boolean = false;
  isLoading: boolean = true;
  showDataInputModal = false;
  showDataInputCustomModal = false;
  formType: string = ''; // Nouvelle propriété pour identifier le formulaire
  documentReady: boolean = false; // Nouveau flag pour indiquer que le document est prêt

  constructor(private authService: AuthService, private paiementSrv: PaiementService, private toastr: ToastrService, private walletSrv: WalletService, private telegramSrv: TelegramService, private profilSrv: ProfilService) { }

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
        const clientPseudo = await this.profilSrv.getUserPseudo(userId);
        const accountLevel = await this.walletSrv.getAccountLevel(userId);
        if (result) {
          this.toastr.success('Achat effectué avec succès !', 'Succès');
          const telegramResult = await this.telegramSrv.sendPurchaseInfo(clientPseudo, this.product.price, this.product.title, accountLevel)
          if (!this.product.title.includes('Devenir partenaire')) {
            const formType = this.setFormType();
            if (formType == 0) {
              this.showDataInputModal = true;
            } else {
              this.showDataInputCustomModal = true;
            }
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
    const formMappingTitles = this.titles.find(item => item.title === this.product.title);
    const formMappingCustomTitles = this.customTitles.find(item => item.title === this.product.title);

    if (formMappingTitles) {
      this.formType = formMappingTitles.form;
      return 0;
    } else if (formMappingCustomTitles) {
      this.formType = formMappingCustomTitles.form;
      return 1;
    } else {
      this.formType = 'default';
      return -1;
    }
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