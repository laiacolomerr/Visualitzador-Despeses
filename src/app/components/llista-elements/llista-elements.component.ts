import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Element } from '../../models/element.model';
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
  @Input() payments: Element[] = [];

  trackById(_i: number, payment: Element) { return payment.id; }
}
