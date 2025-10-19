import { InjectionToken } from '@angular/core';
import { NgxsPostmessagePluginOptions } from './options';

export const NGXS_POSTMESSAGE_PLUGIN_OPTIONS =
  new InjectionToken<NgxsPostmessagePluginOptions>(
    'NGXS_POSTMESSAGE_PLUGIN_OPTIONS'
  );
