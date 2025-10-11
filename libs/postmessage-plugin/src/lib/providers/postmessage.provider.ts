import {
  EnvironmentProviders,
  importProvidersFrom,
  makeEnvironmentProviders,
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';
import { PostMessageModule } from '../postmessage.module';
import { PostMessagePlugin } from '../plugins/postmessage.plugin';

export function providerPostMessagePlugin(
  options?: Partial<NgxsPostmessagePluginOptions>
): EnvironmentProviders {
  return makeEnvironmentProviders(providersReturnPostMessagePlugin(options));
}

@NgModule({})
export class NgxsPostmessagePluginModule {
  static forRoot(
    options?: NgxsPostmessagePluginOptions
  ): ModuleWithProviders<PostMessageModule> {
    return {
      ngModule: PostMessageModule,
      providers: providersReturnPostMessagePlugin(options),
    };
  }
}

export function providersReturnPostMessagePlugin(
  options?: Partial<NgxsPostmessagePluginOptions>
): Provider[] {
  return [
    {
      provide: 'NGXS_POSTMESSAGE_PLUGIN_OPTIONS',
      useValue: options || {},
    },
    {
      provide: 'NGXS_PLUGINS',
      useClass: PostMessagePlugin,
      multi: true,
    },
  ];
}

export interface NgxsPostmessagePluginOptions {}
