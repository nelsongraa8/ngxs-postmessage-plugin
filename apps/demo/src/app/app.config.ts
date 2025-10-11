import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { providerPostMessagePlugin } from '@ngxs-postmessage/postmessage-plugin';
import { provideStore } from '@ngxs/store';
import { CounterState } from './ngxs/counter.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    providerPostMessagePlugin(),

    provideStore(),
    provideStore([CounterState]),
  ],
};
