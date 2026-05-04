import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LlistaElementsComponent } from '../../components/llista-elements/llista-elements.component';
import { Pagament } from '../../models/pagament.model';
import { PagamentService } from '../../services/pagament.service';

@Component({
  selector: 'app-llista-pagaments',
  standalone: true,
  imports: [
    LlistaElementsComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './llista-pagaments.component.html',
  styleUrl: './llista-pagaments.component.scss'
})
export class LlistaPagamentsComponent {
  public pagamentService = inject(PagamentService);

  public payments = signal<Pagament[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);
  
  ngOnInit(): void {
    this.getPayments();
  }

  reintentar(): void {
    this.getPayments();
  }

  private getPayments() {
    this.loading.set(true);

    this.pagamentService.getAll()
      .subscribe({
        next: (payments) => {
          this.payments.set(payments);
          this.loading.set(false);
          this.error.set(null);
        },
        error: (error: HttpErrorResponse) => {
          this.error.set(error.message);
          this.loading.set(false);
        }
      })
  }
}
