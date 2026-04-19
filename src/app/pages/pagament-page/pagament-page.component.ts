import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

import { BarraCercaComponent } from '../../components/barra-cerca/barra-cerca.component';
import { LlistaElementsComponent } from '../../components/llista-elements/llista-elements.component';
import { PagamentService } from '../../services/pagament.service';

@Component({
  selector: 'pagament-page',
  standalone: true,
  imports: [
    BarraCercaComponent,
    CommonModule,
    LlistaElementsComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './pagament-page.component.html',
  styleUrl: './pagament-page.component.scss'
})
export class PagamentPageComponent implements OnInit {
  public pagamentService = inject(PagamentService);

  ngOnInit(): void {
    this.pagamentService.obtenirRecurrents();
  }

  reintentar(): void {
    this.pagamentService.obtenirRecurrents();
  }
}
