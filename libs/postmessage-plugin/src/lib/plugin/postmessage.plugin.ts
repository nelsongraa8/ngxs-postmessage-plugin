import { Inject, Injectable } from '@angular/core';
import { NgxsNextPluginFn, NgxsPlugin } from '@ngxs/store/plugins';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';
import { NGXS_POSTMESSAGE_PLUGIN_OPTIONS } from '../symbols/tokens';
import { HandlerManager } from '../handlers/send-father.handler';
import { ReceiveHandler } from '../handlers/receive.handler';

@Injectable({
  providedIn: 'root',
})
export class PostMessagePlugin implements NgxsPlugin {
  constructor(
    @Inject(NGXS_POSTMESSAGE_PLUGIN_OPTIONS)
    private options: NgxsPostmessagePluginOptions,
    private receiveHandler: ReceiveHandler,
    private handlerManager: HandlerManager
  ) {
    this.receiveHandler.receive(this.options);
  }

  handle(state: any, action: any, next: NgxsNextPluginFn): void {
    const result = next(state, action);

    this.handlerManager.send({ state, action, result }, this.options);

    return result;
  }
}
