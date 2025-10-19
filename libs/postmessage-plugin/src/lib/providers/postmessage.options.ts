import { InjectionToken } from '@angular/core';

export const NGXS_POSTMESSAGE_PLUGIN_OPTIONS =
  new InjectionToken<NgxsPostmessagePluginOptions>(
    'NGXS_POSTMESSAGE_PLUGIN_OPTIONS'
  );

export interface NgxsPostmessagePluginOptions {
  targets?: { name: string; origin: string[]; transfer?: unknown[] }[];
  send: SendOptions;
}

export interface SendOptions {
  actions: SendOptionAction[];
  states: SendOptionState[];
}

export interface SendOptionState {
  type: string;
  to?: string[];
  targets?: string[];
  mode?: 'change' | 'all';
}

export interface SendOptionAction {
  type: string;
  to?: string[];
  targets?: string[];
  mode?: 'change' | 'all';
}
