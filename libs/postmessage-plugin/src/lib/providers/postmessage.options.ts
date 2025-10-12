import { InjectionToken } from '@angular/core';

export interface NgxsPostmessagePluginOptions {}

export const NGXS_POSTMESSAGE_PLUGIN_OPTIONS =
  new InjectionToken<NgxsPostmessagePluginOptions>(
    'NGXS_POSTMESSAGE_PLUGIN_OPTIONS'
  );
