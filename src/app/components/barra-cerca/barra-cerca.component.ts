import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GridFilter } from '../../models/grid-filter.model';
import { PaymentMethod } from '../../models/payment-method.type';

@Component({
  selector: 'barra-cerca',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  @Output() changeFilters = new EventEmitter<GridFilter>();

  public nameValue?: string;
  public dateValue?: string;
  public paymentMethod: string = 'all';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const currentFilter: GridFilter = {
      name: this.nameValue?.trim().toLowerCase() ?? undefined,
      date: this.dateValue ? new Date(this.dateValue) : undefined,
      paymentMethod: this.paymentMethod === 'all' ? undefined : this.paymentMethod as PaymentMethod
    };

    this.changeFilters.emit(currentFilter);
  }
}