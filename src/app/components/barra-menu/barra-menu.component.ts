import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'barra-menu',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterModule
  ],
  templateUrl: './barra-menu.component.html',
  styleUrl: './barra-menu.component.scss'
})
export class BarraMenuComponent {
  public readonly authService = inject(AuthService);
}
