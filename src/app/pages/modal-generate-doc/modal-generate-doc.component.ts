import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FORM_DEFINITIONS } from './form-definitions';
import { AuthService } from '../../services/auth.service';
import { DocumentsService } from '../../services/documents.service';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'date' | 'select' | 'textarea';
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


  constructor(private fb: FormBuilder, private authService: AuthService, private documentsService: DocumentsService) { }

  ngOnInit() {
    this.loadFormFields();
    this.initForm();
  }

  loadFormFields() {
    if (this.formType in FORM_DEFINITIONS) {
      this.formFields = FORM_DEFINITIONS[this.formType as keyof typeof FORM_DEFINITIONS] as FormField[];
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
      const formData = this.dataForm.value;
      this.formSubmit.emit(formData);

      this.authService.getUserId().subscribe(async userId => {
        if(userId) {
          try {
            let generatedDocument;
            switch (this.formType) {
              case 'test_alcolemie':
                generatedDocument = await this.documentsService.generateTestAlcolemie(formData, userId);
                break;
              case 'test_stup_urinaire':
                generatedDocument = await this.documentsService.generateTestStupefiantUrinaire(formData, userId);
                break;
              case 'test_stup_sanguin':
                generatedDocument = await this.documentsService.generateTestStupefiantSanguin(formData, userId);
                break;
              case 'test_psycho':
                generatedDocument = await this.documentsService.generateTestPsychotechnique(formData, userId);
                break;
              default:
                console.error(`Form type "${this.formType}" is not supported`);
                this.isLoading = false;
                return;
            }
  
            if (generatedDocument) {
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
    console.log('Téléchargement du fichier');
    // Simuler un téléchargement
    setTimeout(() => {
      this.documentDownloaded = true;
      this.documentGenerated.emit();
    }, 1000);
  }

  closeModal() {
    if (this.documentDownloaded) {
      this.close.emit();
    } else {
      console.log('Veuillez d\'abord télécharger le document.');
      // Optionnellement, affichez un message à l'utilisateur
    }
  }
}