import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BarraCercaComponent } from "./components/barra-cerca/barra-cerca.component";
import { LlistaElementsComponent } from "./components/llista-elements/llista-elements.component";
import { PaymentMethod } from './models/payment-method.type';
import { PAYMENTS } from './mocks/dades.mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LlistaElementsComponent,
    BarraCercaComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public payments = PAYMENTS;

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
