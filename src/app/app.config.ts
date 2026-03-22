import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import localeCa  from '@angular/common/locales/ca';

import { routes } from './app.routes';

registerLocaleData(localeCa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'ca' }
  ]
};
