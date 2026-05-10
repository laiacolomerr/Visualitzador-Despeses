import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  styleUrl: './llista-elements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LlistaElementsComponent {
  @Input() payments: Pagament[] = [];

  private routes = inject(Router);

  trackById(_i: number, payment: Pagament) { return payment.id; }

  onClick({ id }: Pagament) {
    this.routes.navigate([`detall/${ id }`]);
  }
}
