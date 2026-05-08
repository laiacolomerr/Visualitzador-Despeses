import { Component, inject, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

import { FormulariCercaComponent } from "../../components/formulari-cerca/formulari-cerca.component";
import { LlistaElementsComponent } from '../../components/llista-elements/llista-elements.component';
import { PagamentService } from '../../services/pagament.service';

@Component({
  selector: 'app-llista-pagaments-cerca',
  standalone: true,
  imports: [
    FormulariCercaComponent,
    LlistaElementsComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './llista-pagaments-cerca.component.html',
  styleUrl: './llista-pagaments-cerca.component.scss'
})
export class LlistaPagamentsCercaComponent implements OnInit {
  public pagamentService = inject(PagamentService);
  
  ngOnInit(): void {
    this.pagamentService.obtenirRecurrents();
  }

  reintentar(): void {
    this.pagamentService.obtenirRecurrents();
  }
}
