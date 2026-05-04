import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, map, Observable, of } from 'rxjs';

import { adaptarPagamentsApi } from '../adaptadors/pagament.adaptador';
import { environment } from '../../environments/environment';
import { Pagament } from '../models/pagament.model';
import { PaymentApiResponse } from '../models/payment-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentService {

  payments = signal<Pagament[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  obtenirRecurrents(): void {
    const url = `${ this.baseUrl }?isRecurring=true`;
    this.carregarPagaments(url);
  }

  cercar(terme: string): void {
    if (!terme.trim()) {
      this.obtenirRecurrents();
      return;
    }

    const termeCodificat = encodeURIComponent(terme);
    const url = `${ this.baseUrl }?name:contains=${ termeCodificat }`;
    this.carregarPagaments(url);
  }

  search(terme: string): Observable<PaymentApiResponse[]> {
    if (!terme.trim()) {
      return of([]);
    }

    const termeCodificat = encodeURIComponent(terme);
    const url = `${ this.baseUrl }?name:contains=${ termeCodificat }`;
    return this.http.get<PaymentApiResponse[]>(url);
  }

  getAll() {
    const url = `${ this.baseUrl }`;
    return this.http.get<PaymentApiResponse[]>(url)
      .pipe(
        map(adaptarPagamentsApi),
        finalize(() => this.loading.set(false))
      )
  }

  private carregarPagaments(url: string): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<PaymentApiResponse[]>(url)
      .pipe(
        map(adaptarPagamentsApi),
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.handleError(error);
          this.error.set(errorMessage);
          return of([] as Pagament[]);
        }),
        finalize(() => this.loading.set(false))
      )
      .subscribe((elements) => {
        this.payments.set(elements);
      });
  }

  private handleError(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      return `Error de xarxa: ${error.error.message}`;
    }

    switch (error.status) {
      case 0:
        return 'No es pot connectar al servidor. Comprova que json-server està actiu.';
      case 404:
        return 'Endpoint no trobat. Verifica la URL de l\'API.';
      case 500:
        return 'Error intern del servidor.';
      default:
        return `Error desconegut (${ error.status }): ${ error.message }`;
    }
  }
}
