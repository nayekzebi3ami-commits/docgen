import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FORM_DEFINITIONS } from './form-definitions';
import { AuthService } from '../../services/auth.service';
import { DocumentsService } from '../../services/documents.service';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'date' | 'select' | 'textarea' | 'number';
  options?: { value: string; label: string }[];
  validators: any[];
}

@Component({
  selector: 'app-modal-generate-doc',
  templateUrl: './modal-generate-doc.component.html',
  styleUrl: './modal-generate-doc.component.scss'
})
export class ModalGenerateDocComponent implements OnInit {
  @Input() formType: string = 'default';
  @Input() formTitle: string = 'Saisie des données';
  @Output() formSubmit = new EventEmitter<any>();
  @Output() documentGenerated = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  formFields: FormField[] = [];
  dataForm!: FormGroup;
  isLoading = false;
  fileReady = false;
  documentDownloaded = false;
  documentUrl: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private documentsService: DocumentsService) {
    console.log("🛠️ Constructeur exécuté !");
  }

  ngOnInit() {
    console.log("🔎 Début de ngOnInit...");
    this.loadFormFields();
    this.initForm();  // Initialise le formulaire
    Object.keys(this.dataForm.controls).forEach(field => {
      const control = this.dataForm.get(field);
      control?.statusChanges.subscribe(status => {
        console.log(`🧐 Statut du champ '${field}' :`, status);
        console.log(`🛑 Erreurs du champ '${field}' :`, control?.errors);
      });
    });
    setTimeout(() => {
      this.dataForm.updateValueAndValidity();
      console.log("🔄 Formulaire forcé à se mettre à jour !");
    });


    // 🛠️ Ajout du debug pour voir les mises à jour du formulaire
    this.dataForm.valueChanges.subscribe(values => {
      console.log("🆕 Valeurs du formulaire mises à jour :", values);
      console.log("🔄 Statut du formulaire :", this.dataForm.status);
    });

    this.dataForm.statusChanges.subscribe(status => {
      console.log("Form Status Changed:", status);
    });
  }



  loadFormFields() {
    if (!FORM_DEFINITIONS || !(this.formType in FORM_DEFINITIONS)) {
      console.error(`Form type "${this.formType}" not found in FORM_DEFINITIONS`);
      this.formFields = [];
      return;
    }

    this.formFields = FORM_DEFINITIONS[this.formType as keyof typeof FORM_DEFINITIONS] as FormField[];
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
      const formData = this.dataForm.value;
      this.formSubmit.emit(formData);

      this.authService.getUserId().subscribe(async userId => {
        if (userId) {
          try {
            let generatedDocumentUrl: string;
            switch (this.formType) {
              case 'test_alcolemie':
                generatedDocumentUrl = await this.documentsService.generateTestAlcolemie(formData, userId);
                break;
              case 'test_stup_urinaire':
                generatedDocumentUrl = await this.documentsService.generateTestStupefiantUrinaire(formData, userId);
                break;
              case 'test_stup_sanguin':
                generatedDocumentUrl = await this.documentsService.generateTestStupefiantSanguin(formData, userId);
                break;
              case 'test_psycho':
                generatedDocumentUrl = await this.documentsService.generateTestPsychotechnique(formData, userId);
                break;
              case 'assr_2':
                generatedDocumentUrl = await this.documentsService.generateAssr2(formData, userId);
                break;
              case 'journee_appel':
                generatedDocumentUrl = await this.documentsService.generateJourneeAppel(formData, userId);
                break;
              case 'facture_sfr':
                generatedDocumentUrl = await this.documentsService.generateFactureSFR(formData, userId);
                break;
              case 'cdi_sncf':
                generatedDocumentUrl = await this.documentsService.generateCdiSNCF(formData, userId);
                break;
              default:
                console.error(`Form type "${this.formType}" is not supported`);
                this.isLoading = false;
                return;
            }

            if (generatedDocumentUrl) {
              this.documentUrl = generatedDocumentUrl;  // Stocker l'URL du document généré
              this.fileReady = true;
              this.documentGenerated.emit(); // Émettre un événement lorsque le document est prêt
            }
          } catch (error) {
            console.error('Erreur lors de la génération du document:', error);
          } finally {
            this.isLoading = false;
          }
        }
      });
    }
  }

  downloadFile() {
    console.log('Document URL:', this.documentUrl);
    if (this.documentUrl) {
      const link = document.createElement('a');
      fetch(this.documentUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'generated_document.pdf';  // Nom du fichier téléchargé
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(error => console.error('❌ Erreur lors du téléchargement du fichier :', error)); link.target = '_blank';
      link.download = 'generated_document.pdf';  // Nom du fichier téléchargé
      link.click();

      this.documentDownloaded = true;
      this.documentGenerated.emit();  // Émet l'événement indiquant que le document a été téléchargé
    } else {
      console.error('L\'URL du document est vide. Impossible de télécharger le fichier.');
    }
  }

  closeModal() {
    if (this.documentDownloaded) {
      this.close.emit();  // Émettre l'événement de fermeture
    } else {
      console.log('Veuillez d\'abord télécharger le document.');
    }
  }
}