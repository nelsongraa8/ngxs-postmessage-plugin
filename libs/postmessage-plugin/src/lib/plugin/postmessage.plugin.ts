import { Inject, Injectable } from '@angular/core';
import { NgxsNextPluginFn, NgxsPlugin } from '@ngxs/store/plugins';
import { NgxsPostmessagePluginOptions } from '../symbols/interfaces/options';
import { NGXS_POSTMESSAGE_PLUGIN_OPTIONS } from '../symbols/interfaces/tokens';

@Injectable({
  providedIn: 'root',
})
export class PostMessagePlugin implements NgxsPlugin {
  constructor(
    @Inject(NGXS_POSTMESSAGE_PLUGIN_OPTIONS)
    private options: NgxsPostmessagePluginOptions
  ) {}

  handle(state: any, action: any, next: NgxsNextPluginFn) {
    console.info('Posting message to other windows/frames');

    // Call the next plugin in the chain and get the result
    const result = next(state, action);

    // If running in a browser, post the action and new state to other windows/frames
    if (typeof window !== 'undefined' && window.postMessage) {
      // Avoid posting sensitive or large state; customize as needed
      const objectToPost = {
        type: '[NGXS] Action Dispatched',
        action: this.sanitizeForPostMessage(action),
        state: this.sanitizeForPostMessage(result),
      };
      const targetOrigin = '*'; // Adjust target origin for security in production

      window.postMessage(objectToPost, targetOrigin);
    }

    // Return the result to continue the state flow
    return result;
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
