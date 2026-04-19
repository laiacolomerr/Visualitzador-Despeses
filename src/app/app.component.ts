import { Component } from '@angular/core';

import { PagamentPageComponent } from "./pages/pagament-page/pagament-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PagamentPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
