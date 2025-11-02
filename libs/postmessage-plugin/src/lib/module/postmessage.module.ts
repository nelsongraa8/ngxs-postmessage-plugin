import {
  makeEnvironmentProviders,
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';
import { PostMessagePlugin } from '../plugin/postmessage.plugin';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';
import { withNgxsPlugin } from '@ngxs/store';
import { NGXS_POSTMESSAGE_PLUGIN_OPTIONS } from '../symbols/tokens';
import { HandlerManager } from '../handlers/send-father.handler';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
})
export class NgxsPostMessagePluginModule {
  static forRoot(
    options?: NgxsPostmessagePluginOptions
  ): ModuleWithProviders<NgxsPostMessagePluginModule> {
    return {
      ngModule: NgxsPostMessagePluginModule,
      providers: this.providersReturnPostMessagePlugin(options),
    };
  }

  private static providersReturnPostMessagePlugin(
    options?: Partial<NgxsPostmessagePluginOptions>
  ): Provider[] {
    return [
      {
        provide: 'NGXS_PLUGINS',
        useClass: PostMessagePlugin,
      },
    ];
  }
}

export function withNgxsPostMessagePlugin(options?: any) {
  return makeEnvironmentProviders([
    withNgxsPlugin(PostMessagePlugin),
    {
      provide: NGXS_POSTMESSAGE_PLUGIN_OPTIONS,
      useValue: options || {},
    },
  ]);
}
