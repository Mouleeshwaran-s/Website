import Nora from '@primeng/themes/nora';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MyPreset } from '../../public/assets/theme/mytheme';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideClientHydration(),provideAnimationsAsync(),
    providePrimeNG({
        theme: {
          preset: MyPreset,
          options: {
              prefix: 'p',
              darkModeSelector: '',
              cssLayer: false
          },
        },
    }), provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
  ]
};
