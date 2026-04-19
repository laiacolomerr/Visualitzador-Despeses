import { Injectable, signal } from '@angular/core';

import { Pagament } from '../models/pagament.model';

@Injectable({
  providedIn: 'root'
})
export class DestacatsService {
  private readonly LOCAL_STORAGE_KEY = 'pagaments-destacats';
  private readonly pagamentsDestacats = signal<Pagament[]>([]);

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
