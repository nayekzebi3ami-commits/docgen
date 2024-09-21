import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  flipCard() {
    const flipCard = document.querySelector('.flip-card');
    flipCard?.classList.toggle('flipped');
  }
}
