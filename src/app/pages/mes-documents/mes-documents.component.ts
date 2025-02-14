import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DocumentsService } from '../../services/documents.service';

@Component({
  selector: 'app-mes-documents',
  templateUrl: './mes-documents.component.html',
  styleUrl: './mes-documents.component.scss'
})
export class MesDocumentsComponent {
  documents: any[] = [];

  constructor(private authService: AuthService, private documentsSrv: DocumentsService) { }

  ngOnInit(): void {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.documents = await this.documentsSrv.getMyDocuments(userId);
      }
    });
  }

  downloadDocument(url: string): void {
    console.log(`Downloading document: ${url}`);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur lors du téléchargement du document : ${response.statusText}`);
        }
        return response.blob();  // Obtenir le fichier sous forme de blob
      })
      .then(blob => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = url.split('/').pop() || 'document.pdf';  // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);  // Libérer l'URL une fois le téléchargement terminé
      })
      .catch(error => {
        console.error('Erreur lors du téléchargement :', error);
      });
  }

}
