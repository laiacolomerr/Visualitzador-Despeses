import { Component, Input } from '@angular/core';

import { Element } from '../../models/element.model';
import { PaymentMethod } from '../../models/payment-method.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'targeta-element',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() payment!: Element;

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
