import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RechargeService } from '../../services/recharge.service';

@Component({
  selector: 'app-accept-code',
  templateUrl: './accept-code.component.html',
  styleUrl: './accept-code.component.scss'
})
export class AcceptCodeComponent implements OnInit {
  message: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private rechargeSrv: RechargeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const code = params['code'];
      if (code) {
        const accepted = await this.rechargeSrv.acceptCode(code);
        this.message = accepted ? `Code ${code} accepté avec succès` : `Erreur lors de l'acceptation du code ${code}`;
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
