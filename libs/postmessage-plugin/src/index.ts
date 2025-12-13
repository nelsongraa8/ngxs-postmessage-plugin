// Provider and Module
export { NgxsPostMessagePluginModule as NgxsPostMessagePluginModule } from './lib/module/postmessage.module';
export { withNgxsPostMessagePlugin as withNgxsPostMessagePlugin } from './lib/module/ngxs-post-message-plugin.provider';

// Interface for Options
export type { NgxsPostmessagePluginOptions as NgxsPostmessagePluginOptions } from './lib/symbols/interfaces/options';

// Actions and State for Embedded Post Message Bus
export {
  NgxsPmEmbeddedSend as NgxsPmEmbeddedSend,
  NgxsPmEmbeddedReceive as NgxsPmEmbeddedReceive,
} from './lib/handlers/embedded/embedded-post-message-bus.state';
export { EmbeddedPostMessageBusState as EmbeddedPostMessageBusStateExport } from './lib/handlers/embedded/embedded-post-message-bus.state';
