import { Injectable } from '@angular/core';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';

@Injectable({ providedIn: 'root' })
export class HandlerManager {
  execute(
    state: any,
    action: any,
    result: any,
    options: NgxsPostmessagePluginOptions
  ): void {
    if (typeof window !== 'undefined' && window.postMessage) {
      const objectToPost = {
        type: '[NGXS] Action Dispatched',
        action: this.sanitizeForPostMessage(action),
        state: this.sanitizeForPostMessage(result),
      };
      const targetOrigin = '*';

      window.postMessage(objectToPost, targetOrigin);
    }
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
