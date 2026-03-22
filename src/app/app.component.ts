import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LlistaElementsComponent } from "./components/llista-elements/llista-elements.component";
import { PAYMENTS } from './mocks/dades.mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LlistaElementsComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public payments = PAYMENTS;

  
}
