import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarraMenuComponent } from "./components/barra-menu/barra-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BarraMenuComponent,
    RouterModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
