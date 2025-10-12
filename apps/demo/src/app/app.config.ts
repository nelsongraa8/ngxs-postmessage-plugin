import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { CounterState } from '../context/ngxs/counter.state';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsPostMessagePlugin } from '@ngxs-postmessage/postmessage-plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(
      [CounterState],
      withNgxsLoggerPlugin({
        disabled: false,
        collapsed: false,
        logger: console,
      }),
      withNgxsPostMessagePlugin()
    ),
  ],
};
