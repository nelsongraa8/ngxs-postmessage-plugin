import { Inject, Injectable } from '@angular/core';
import { NgxsNextPluginFn, NgxsPlugin } from '@ngxs/store/plugins';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';
import { NGXS_POSTMESSAGE_PLUGIN_OPTIONS } from '../symbols/tokens';

@Injectable({
  providedIn: 'root',
})
export class PostMessagePlugin implements NgxsPlugin {
  constructor(
    @Inject(NGXS_POSTMESSAGE_PLUGIN_OPTIONS)
    private options: NgxsPostmessagePluginOptions
  ) {}

  handle(state: any, action: any, next: NgxsNextPluginFn): void {
    const result = next(state, action);

    return result;
  }
}
