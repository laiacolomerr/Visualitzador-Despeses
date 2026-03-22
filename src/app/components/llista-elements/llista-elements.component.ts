import { Component, Input } from '@angular/core';
import { TargetaElementComponent } from "../targeta-element/targeta-element.component";
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';

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
}
