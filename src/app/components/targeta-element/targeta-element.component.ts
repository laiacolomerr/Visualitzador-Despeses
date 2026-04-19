import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
 import { MatIconModule } from '@angular/material/icon';

import { Pagament } from '../../models/pagament.model';
import { PaymentMethod } from '../../models/payment-method.type';

@Component({
  selector: 'targeta-element',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() payment!: Pagament;

  getPaymentMethodLabel(paymentMethod: PaymentMethod): string {
    switch (paymentMethod) {
      case 'bankTransfer':
        return 'Transferència';

      case 'cash':
        return 'Efectiu';
      
      case 'check':
        return 'Xec';
    
      case 'creditCard':
        return 'Targeta de crèdit';
    
      case 'debitCard':
        return 'Targeta de dèbit';
    
      default:
        return 'PayPal';
    }
  }
}
