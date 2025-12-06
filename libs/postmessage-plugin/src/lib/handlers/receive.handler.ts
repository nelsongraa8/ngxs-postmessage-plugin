import { Injectable, Injector } from '@angular/core';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';
import { Store } from '@ngxs/store';
import { SetExternalDataInsidePlugin } from './post-message-internal.state';

@Injectable({
  providedIn: 'root',
})
export class ReceiveHandler {
  private store!: Store;

  constructor(private injector: Injector) {}

  receive(options: NgxsPostmessagePluginOptions) {
    const config = this.normalizeConfig(options);
    if (!config) return;

    window.addEventListener('message', (event) => {
      if (!this.isValidOrigin(event.origin, config.fromOrigin)) return;
      if (!event.data) return;

      const store = this.getStore();

      const action = config.actionType
        ? new config.actionType(event.data)
        : new SetExternalDataInsidePlugin(event.data);

      store.dispatch(action);
    });
  }

  private getStore() {
    return (this.store ??= this.injector.get(Store));
  }

  private normalizeConfig(options?: NgxsPostmessagePluginOptions) {
    if (!options?.receive) return null;
    const { fromOrigin, targetState, actionType } = options.receive;

    if (!fromOrigin || !targetState) return null;

    return { fromOrigin, targetState, actionType };
  }

  private isValidOrigin(eventOrigin: string, expected: string): boolean {
    return eventOrigin === expected;
  }
}
