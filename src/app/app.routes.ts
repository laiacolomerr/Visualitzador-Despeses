import { Routes } from '@angular/router';

import { LlistaPagamentsCercaComponent } from './pages/llista-pagaments-cerca/llista-pagaments-cerca.component';
import { LlistaPagamentsComponent } from './pages/llista-pagaments/llista-pagaments.component';
import { PagamentComponent } from './pages/pagament/pagament.component';
import { PagamentPageComponent } from './pages/pagament-page/pagament-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pagaments', pathMatch: 'full' },
  { path: 'pagaments', component: LlistaPagamentsComponent, title: 'Catàleg de pagaments' },
  { path: 'cerca', component: LlistaPagamentsCercaComponent, title: 'Cerca de pagaments' },
  { path: 'destacats', component: PagamentPageComponent, title: 'Pagaments destacats' },
  { path: 'detall/:id', component: PagamentComponent, title: 'Detall del pagament' },
  { path: '**', redirectTo: 'pagaments' }
];
