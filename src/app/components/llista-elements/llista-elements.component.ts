import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentApiResponse } from '../../models/payment-api-response.model';
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
  @Input() payments: PaymentApiResponse[] = [];

  trackById(_i: number, payment: PaymentApiResponse) { return payment.id; }
}
