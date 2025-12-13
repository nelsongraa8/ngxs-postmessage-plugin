import { NgxsPostMessagePluginModule } from './lib/module/postmessage.module';
import { withNgxsPostMessagePlugin } from './lib/module/ngxs-post-message-plugin.provider';
import { NgxsPostmessagePluginOptions } from './lib/symbols/interfaces/options';
import {
  NgxsPmEmbeddedSend,
  NgxsPmEmbeddedReceive,
} from './lib/handlers/embedded/embedded-post-message-bus.state';
import { EmbeddedPostMessageBusState } from './lib/handlers/embedded/embedded-post-message-bus.state';

// API pública
export {
  NgxsPostMessagePluginModule as NgxsPostMessagePluginModule,
  withNgxsPostMessagePlugin as withNgxsPostMessagePlugin,
  NgxsPmEmbeddedSend as NgxsPmEmbeddedSend,
  NgxsPmEmbeddedReceive as NgxsPmEmbeddedReceive,
  EmbeddedPostMessageBusState as EmbeddedPostMessageBusState,
};

// Interface for Options
export type { NgxsPostmessagePluginOptions as NgxsPostmessagePluginOptions };
