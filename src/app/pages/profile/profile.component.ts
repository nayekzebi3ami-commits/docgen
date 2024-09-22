import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WalletService } from '../../services/wallet.service';
import { ProfilService } from '../../services/profil.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  user = {
    name: '',
    email: '',
    avatar: '',
    purchases: 0,
    balance: 0
  };

  newPw: string = '';
  newPwConfirm: string = '';

  showEditProfileModal = false;
  showChangePasswordModal = false;
  showConfirmModal = false;
  editField: 'name' | 'email' | null = null;

  constructor(private afAuth: AngularFireAuth, private walletSrv: WalletService, private authService: AuthService, private profilSrv: ProfilService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        this.user.balance = await this.walletSrv.getMyWalletAmount(userId);
        const profile = await this.profilSrv.getMyInfo(userId);
        this.user.name = profile.pseudo;
        this.user.email = profile.email;
        this.user.avatar = profile.photo;
      }
    });
  }

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

  async changePassword(newPassword: string) {
    const user = await this.afAuth.currentUser;

    if (user) {
      try {
        await user.updatePassword(newPassword);
        this.toastr.success('Mot de passe mis à jour avec succès');
        this.closeChangePasswordModal();
      } catch (error: any) {
        let errorMessage = 'Une erreur est survenue lors de la mise à jour du mot de passe';

        switch (error.code) {
          case 'auth/weak-password':
            errorMessage = 'Le mot de passe est trop faible. Veuillez choisir un mot de passe plus fort.';
            break;
          case 'auth/requires-recent-login':
            errorMessage = 'Pour des raisons de sécurité, veuillez vous reconnecter avant de changer votre mot de passe.';
            break;
          case 'auth/user-token-expired':
            errorMessage = 'Votre session a expiré. Veuillez vous reconnecter.';
            break;
          case 'auth/user-not-found':
            errorMessage = 'Utilisateur non trouvé. Veuillez vous reconnecter.';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Trop de tentatives. Veuillez réessayer plus tard.';
            break;
        }

        this.toastr.error(errorMessage);
        throw error;
      }
    } else {
      this.toastr.error('Veuillez vous connecter pour changer votre mot de passe');
    }
  }

  confirmEdit(password: string) {
    this.authService.getUserId().subscribe(async userId => {
      if (userId) {
        const result = await this.profilSrv.changeProfileData(password, this.user.name, this.user.email, userId);
        if (result) {
          this.toastr.success('Profil modifié avec succès.', 'Succès');
          this.closeConfirmModal();
          this.closeEditProfileModal();
        } else {
          this.toastr.error('Erreur lors de la modification du profil.', 'Erreur');
        }
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Supprimer la partie 'data:image/png;base64,' pour ne garder que le base64 pur
        const base64String = e.target.result.split(',')[1];  // Récupère uniquement les données base64 sans préfixe
        this.authService.getUserId().subscribe(async userId => {
          if (userId) {
            const result = await this.profilSrv.changeProfilePicture(base64String, userId, file.type);
            if (result) {
              this.toastr.success('Photo de profil modifiée avec succès.', 'Succès');
            } else {
              this.toastr.error('Erreur lors de la modification de la photo de profil.', 'Erreur');
            }
          }
        });
      };
      reader.readAsDataURL(file);
    }
  }
}
