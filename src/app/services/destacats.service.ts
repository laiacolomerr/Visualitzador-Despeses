import { computed, Injectable, signal } from '@angular/core';

import { Pagament } from '../models/pagament.model';

@Injectable({
  providedIn: 'root'
})
export class DestacatsService {
  private readonly LOCAL_STORAGE_KEY = 'pagaments-destacats';
  private readonly pagamentsDestacats = signal<Pagament[]>([]);
  
  readonly destacats = this.pagamentsDestacats.asReadonly();
  readonly totalDestacats = computed(() => this.destacats().length);

  constructor() {
    this.carregarDestacats();
  }

  afegirDestacat(pagament: Pagament): void {
    if (this.esDestacat(pagament.id)) {
      return;
    }

    const nouPreferit: Pagament = { ...pagament };

    this.pagamentsDestacats.update(destacats => [...destacats, nouPreferit]);
    this.desarDestacats();
  }

  eliminarDestacat(id: string): void {
    this.pagamentsDestacats.update(destacats =>
      destacats.filter(p => p.id !== id)
    );

    this.desarDestacats();
  }

  esDestacat(id: string) {
    return this.pagamentsDestacats().some(p => p.id === id);
  }

  obtenirDestacat(paymentId: string): Pagament | undefined {
    return this.pagamentsDestacats().find(p => p.id === paymentId);
  }

  afegirNota(paymentId: string, nota: string): void {
    this.pagamentsDestacats.update(payments =>
      payments.map(p => {
        if (p.id === paymentId) {
          return { ...p, notes: [...p.notes, nota] };
        }
        return p;
      })
    );
    this.desarDestacats();
  }

  eliminarNota(paymentId: string, indexNota: number): void {
    this.pagamentsDestacats.update(payments =>
      payments.map(p => {
        if (p.id === paymentId) {
          const notesActualitzades = [...p.notes];
          notesActualitzades.splice(indexNota, 1);
          return { ...p, notes: notesActualitzades };
        }
        return p;
      })
    );
    this.desarDestacats();
  }

  private desarDestacats(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.pagamentsDestacats()));
  }

  private carregarDestacats(): void {
    const dades = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (dades) {
      try {
        const destacats = JSON.parse(dades) as Pagament[];
        this.pagamentsDestacats.set(destacats);
      } catch (error) {
        console.error('Error carregant preferits:', error);
        this.pagamentsDestacats.set([]);
      }
    }
  }
}
