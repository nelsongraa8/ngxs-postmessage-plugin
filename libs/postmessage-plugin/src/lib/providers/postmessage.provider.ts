import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';
import { PostMessageModule } from '../postmessage.module';
import { PostMessagePlugin } from '../plugin/postmessage.plugin';
import { withNgxsPlugin } from '@ngxs/store';
import {
  NGXS_POSTMESSAGE_PLUGIN_OPTIONS,
  NgxsPostmessagePluginOptions,
} from './postmessage.options';

export function withNgxsPostMessagePlugin(options?: any) {
  return makeEnvironmentProviders([
    withNgxsPlugin(PostMessagePlugin),
    {
      provide: NGXS_POSTMESSAGE_PLUGIN_OPTIONS,
      useValue: options || {},
    },
  ]);
}

@NgModule({})
export class NgxsPostmessagePluginModule {
  static forRoot(
    options?: NgxsPostmessagePluginOptions
  ): ModuleWithProviders<PostMessageModule> {
    return {
      ngModule: PostMessageModule,
      providers: this.providersReturnPostMessagePlugin(options),
    };
  }

  static providersReturnPostMessagePlugin(
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
