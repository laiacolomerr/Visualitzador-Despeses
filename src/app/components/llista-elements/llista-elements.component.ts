import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagament } from '../../models/pagament.model';
import { TargetaElementComponent } from "../targeta-element/targeta-element.component";

@Component({
  selector: 'llista-elements',
  standalone: true,
  imports: [
    CommonModule,
    TargetaElementComponent
  ],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  @Input() payments: Pagament[] = [];

  trackById(_i: number, payment: Pagament) { return payment.id; }
}
