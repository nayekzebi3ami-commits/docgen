import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RechargeService } from '../../services/recharge.service';

@Component({
  selector: 'app-refuse-code',
  templateUrl: './refuse-code.component.html',
  styleUrl: './refuse-code.component.scss'
})
export class RefuseCodeComponent implements OnInit {
  message: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private rechargeSrv: RechargeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const code = params['code'];
      if (code) {
        const rejected = await this.rechargeSrv.refuseCode(code);
        this.message = rejected ? `Code ${code} refusé avec succès` : `Erreur lors du refus du code ${code}`;
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
