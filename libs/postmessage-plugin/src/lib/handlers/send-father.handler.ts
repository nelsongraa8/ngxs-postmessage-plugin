import { Injectable, Injector } from '@angular/core';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';
import { Store } from '@ngxs/store';

@Injectable({ providedIn: 'root' })
export class HandlerManager {
  private store?: Store;

  constructor(private injector: Injector) {}

  receive(options: NgxsPostmessagePluginOptions): void {
    window.addEventListener('message', (event) => {
      if (!this.store) {
        this.store = this.injector.get(Store);
      }
    });
  }

  send(
    { state, action, result }: { state: any; action: any; result: any },
    options: NgxsPostmessagePluginOptions
  ): void {
    if (!options.send.actions) {
      return;
    }

    options.send.actions.forEach((sendAction) => {
      if (!(sendAction.type === action.constructor)) {
        return;
      }

      window.parent.postMessage(
        this.sanitizeForPostMessage(action),
        sendAction.to ?? '*'
      );
    });
  }

  private sanitizeForPostMessage(obj: unknown): unknown {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch (error) {
      console.warn(
        'Object could not be serialized, sending minimal data:',
        error
      );
      return {
        type: (obj as any)?.type || 'unknown',
        timestamp: new Date().toISOString(),
      };
    }
  }
}
