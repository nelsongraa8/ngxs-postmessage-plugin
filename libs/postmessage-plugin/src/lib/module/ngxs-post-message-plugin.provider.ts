import { makeEnvironmentProviders } from '@angular/core';
import { provideStates, withNgxsPlugin } from '@ngxs/store';
import { PostMessagePlugin } from '../plugin/postmessage.plugin';
import { NGXS_POSTMESSAGE_PLUGIN_OPTIONS } from '../symbols/tokens';
import { EmbeddedPostMessageBusState } from '../handlers/embedded/embedded-post-message-bus.state';

export function withNgxsPostMessagePlugin(options?: any) {
  return makeEnvironmentProviders([
    provideStates([EmbeddedPostMessageBusState]),
    withNgxsPlugin(PostMessagePlugin),
    {
      provide: NGXS_POSTMESSAGE_PLUGIN_OPTIONS,
      useValue: options || {},
    },
  ]);
}
