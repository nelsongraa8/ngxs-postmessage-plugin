import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { PostMessagePlugin } from '../plugin/postmessage.plugin';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';
import { NgxsModule } from '@ngxs/store';
import { EmbeddedPostMessageBusState } from '../handlers/embedded/embedded-post-message-bus.state';

@NgModule({
  imports: [NgxsModule.forFeature([EmbeddedPostMessageBusState])],
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
        multi: true,
      },
    ];
  }
}
