import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Pagament } from '../../models/pagament.model';
import { PagamentService } from '../../services/pagament.service';
import { TargetaElementComponent } from "../../components/targeta-element/targeta-element.component";

@Component({
  selector: 'app-pagament',
  standalone: true,
  imports: [
    TargetaElementComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './pagament.component.html',
  styleUrl: './pagament.component.scss'
})
export class PagamentComponent implements OnInit {
  public payment = signal<Pagament | undefined>(undefined);
  public loading = signal<boolean>(true);
  public error = signal<string | null>(null);

  private route = inject(ActivatedRoute);
  private pagamentService = inject(PagamentService);
  
  ngOnInit(): void {
    const paymentId = this.route.snapshot.paramMap.get('id');
    
    this.pagamentService.getById(Number(paymentId))
      .subscribe({
        next: (payment?: Pagament) => {
          this.payment.set(payment);
          this.loading.set(false);
        },
        error: (error: HttpErrorResponse) => {
          this.error.set(error.message);
          this.loading.set(false);
        }
      })
  }

}
