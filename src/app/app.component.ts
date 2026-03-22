import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BarraCercaComponent } from "./components/barra-cerca/barra-cerca.component";
import { LlistaElementsComponent } from "./components/llista-elements/llista-elements.component";
import { PAYMENTS } from './mocks/dades.mock';
import { GridFilter } from './models/grid-filter.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BarraCercaComponent,
    CommonModule,
    LlistaElementsComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public payments = PAYMENTS;

  onChangeGridFilter(gridFilter: GridFilter) {
    const { date, name, paymentMethod } = gridFilter;

    this.payments = PAYMENTS.filter((payment) => {
      if(name && !payment.name.toLowerCase().includes(name)) return false;
      if(date && !this.datesAreEqual(date, payment.date)) return false;
      if(paymentMethod && paymentMethod !== payment.paymentMethod) return false;
      return true;
    });
  }

  private datesAreEqual(date1: Date, date2: Date) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }
}
