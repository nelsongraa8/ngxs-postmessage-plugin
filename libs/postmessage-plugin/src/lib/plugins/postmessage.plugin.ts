import { Injectable } from '@angular/core';
import { NgxsNextPluginFn, NgxsPlugin } from '@ngxs/store/plugins';

@Injectable()
export class PostMessagePlugin implements NgxsPlugin {
  handle(state: any, action: any, next: NgxsNextPluginFn) {
    // Call the next plugin in the chain and get the result
    const result = next(state, action);

    // If running in a browser, post the action and new state to other windows/frames
    if (typeof window !== 'undefined' && window.postMessage) {
      // Avoid posting sensitive or large state; customize as needed
      const objectToPost = {
        type: '[NGXS] Action Dispatched',
        action,
        state: result,
      };
      const targetOrigin = '*'; // Adjust target origin for security in production

      window.postMessage(objectToPost, targetOrigin);
    }

    // Return the result to continue the state flow
    return result;
  }
}
