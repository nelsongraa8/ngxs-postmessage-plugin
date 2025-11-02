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
import {
  NgxsPostmessagePluginOptions,
  withNgxsPostMessagePlugin,
} from '@ngxs-postmessage/postmessage-plugin';

export const SimplePostMessageConfig: NgxsPostmessagePluginOptions = {
  send: {
    actions: [
      {
        type: 'Increment',
        to: ['*'],
        targets: () =>
          document.getElementById(
            'childrenExampleAppTest'
          ) as HTMLIFrameElement,
      },
      {
        type: 'Decrement',
        to: ['https://analytics.app'],
        targets: () =>
          document.getElementById(
            'childrenExampleAppTest'
          ) as HTMLIFrameElement,
      },
    ],
    states: [
      {
        type: 'counter',
        to: ['*', 'https://analytics.app'],
        targets: () =>
          document.getElementById(
            'childrenExampleAppTest'
          ) as HTMLIFrameElement,
      },
    ],
  },
};

// export const ExtremePostMessageConfig: NgxsPostmessagePluginOptions = {
//   targets: [
//     { name: 'all', origin: ['*'], transfer: ['*'] },
//     {
//       name: 'analytics',
//       origin: ['https://analytics.app'],
//       transfer: [''],
//     },
//   ],
//   send: {
//     actions: [{ type: '*', targets: ['all'], mode: 'all' }],
//     states: [{ type: '*', targets: ['all', 'analytics'], mode: 'change' }],
//   },
// };

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
      withNgxsPostMessagePlugin(SimplePostMessageConfig)
    ),
  ],
};
