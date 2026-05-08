import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { LlistaPagamentsCercaComponent } from './pages/llista-pagaments-cerca/llista-pagaments-cerca.component';
import { LlistaPagamentsComponent } from './pages/llista-pagaments/llista-pagaments.component';
import { PagamentComponent } from './pages/pagament/pagament.component';
import { PagamentPageComponent } from './pages/pagament-page/pagament-page.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pagaments', pathMatch: 'full' },
  { path: 'pagaments', component: LlistaPagamentsComponent, title: 'Catàleg de pagaments' },
  { path: 'cerca', component: LlistaPagamentsCercaComponent, title: 'Cerca de pagaments' },
  { path: 'destacats', component: PagamentPageComponent, title: 'Pagaments destacats', canActivate: [authGuard] },
  { path: 'detall/:id', component: PagamentComponent, title: 'Detall del pagament' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '**', redirectTo: 'pagaments' }
];
