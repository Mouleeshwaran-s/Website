import Nora from '@primeng/themes/nora';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideAnimationsAsync(),
    providePrimeNG({
        theme: {
          preset: Nora,
          options: {
              prefix: 'p',
              darkModeSelector: '',
              cssLayer: false
          }
        },
    })]
};
