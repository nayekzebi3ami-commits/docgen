import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    name: 'Petit Filou',
    email: 'filou@example.com',
    avatar: '',
    purchases: 15,
    balance: 29600
  };

  showEditProfileModal = false;
  showChangePasswordModal = false;
  showConfirmModal = false;
  editField: 'name' | 'email' | null = null;

  openEditProfileModal() {
    this.showEditProfileModal = true;
  }

  closeEditProfileModal() {
    this.showEditProfileModal = false;
  }

  openChangePasswordModal() {
    this.showChangePasswordModal = true;
  }

  closeChangePasswordModal() {
    this.showChangePasswordModal = false;
  }

  openConfirmModal(field: 'name' | 'email') {
    this.editField = field;
    this.showConfirmModal = true;
  }

  closeConfirmModal() {
    this.showConfirmModal = false;
    this.editField = null;
  }

  updateProfile(field: string, value: string) {
    // Ici, vous implémenteriez la logique pour mettre à jour le profil
    console.log(`Updating ${field} to ${value}`);
    this.closeEditProfileModal();
  }

  changePassword(oldPassword: string, newPassword: string) {
    // Ici, vous implémenteriez la logique pour changer le mot de passe
    console.log('Changing password');
    this.closeChangePasswordModal();
  }

  confirmEdit(password: string) {
    // Ici, vous implémenteriez la logique pour confirmer l'édition avec le mot de passe
    console.log(`Confirming edit of ${this.editField} with password`);
    this.closeConfirmModal();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Ici, vous implémenteriez la logique pour télécharger et mettre à jour l'avatar
      console.log('Uploading new avatar');
    }
  }
}
