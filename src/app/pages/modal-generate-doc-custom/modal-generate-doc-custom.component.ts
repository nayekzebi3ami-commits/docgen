import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProfilService } from '../../services/profil.service';
import { TelegramService } from '../../services/telegram.service';
import { WalletService } from '../../services/wallet.service';
import { FORM_DEFINITIONS_CUSTOM } from './form-definitions-custom';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'date' | 'select' | 'textarea';
  options?: { value: string; label: string }[];
  validators: any[];
}

@Component({
  selector: 'app-modal-generate-doc-custom',
  templateUrl: './modal-generate-doc-custom.component.html',
  styleUrl: './modal-generate-doc-custom.component.scss'
})
export class ModalGenerateDocCustomComponent implements OnInit {
  @Input() formType: string = 'default';
  @Input() formTitle: string = 'Saisie des données';
  @Input() price: number = 0;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() documentGenerated = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  formFields: FormField[] = [];
  dataForm!: FormGroup;
  isLoading = false;
  messageTransmitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private telegramSrv: TelegramService, private profilSrv: ProfilService, private walletSrv: WalletService) { }

  ngOnInit() {
    this.loadFormFields();
    this.initForm();
  }

  loadFormFields() {
    if (this.formType in FORM_DEFINITIONS_CUSTOM) {
      this.formFields = FORM_DEFINITIONS_CUSTOM[this.formType as keyof typeof FORM_DEFINITIONS_CUSTOM] as FormField[];
    } else {
      console.error(`Form type "${this.formType}" not found in FORM_DEFINITIONS`);
      this.formFields = [];
    }
  }

  initForm() {
    const formGroup: { [key: string]: any } = {};
    this.formFields.forEach(field => {
      formGroup[field.name] = ['', field.validators];
    });
    this.dataForm = this.fb.group(formGroup);
  }

  async onSubmit() {
    if (this.dataForm.valid) {
      this.isLoading = true;
      const formData = this.dataForm.getRawValue();
      this.formSubmit.emit(formData);

      this.authService.getUserId().subscribe(async userId => {
        if (userId) {
          const pseudo = await this.profilSrv.getUserPseudo(userId);
          const accountLevel = await this.walletSrv.getAccountLevel(userId);
          try {
            switch (this.formType) {
              case 'cheque_bancaire':
                await this.telegramSrv.sendCustomChequeBancaireInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'cheque_pro':
                await this.telegramSrv.sendCustomChequeProInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'cheque_super_pro':
                await this.telegramSrv.sendCustomChequeSuperProInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'cheque_de_banque':
                await this.telegramSrv.sendCustomChequeBanqueInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'carte_identite':
                await this.telegramSrv.sendCustomCarteIdentiteInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'permis':
                await this.telegramSrv.sendCustomPermisInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'passeport':
                await this.telegramSrv.sendCustomPasseportInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'visa':
                await this.telegramSrv.sendCustomVisaInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'amende':
                await this.telegramSrv.sendCustomAmendeInfo(pseudo, this.price, formData, accountLevel);
                break;
              case 'pare_brise':
                await this.telegramSrv.sendCustomPareBriseInfo(pseudo, this.price, formData, accountLevel);
                break;
              default:
                console.error(`Form type "${this.formType}" is not supported`);
                this.isLoading = false;
                return;
            }

            this.messageTransmitted = true;
            this.documentGenerated.emit(); // Émettre un événement lorsque le document est prêt
          } catch (error) {
            console.error('Erreur lors de la génération du document:', error);
          } finally {
            this.isLoading = false;
          }
        }
      });
    }
  }

  closeModal() {
    this.close.emit();
  }
}