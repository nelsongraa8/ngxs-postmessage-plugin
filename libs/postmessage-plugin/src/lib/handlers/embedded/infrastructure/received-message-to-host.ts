import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngxs/store';
import { NgxsPmEmbeddedReceive } from '../embedded-post-message-bus.state';
import { PostMessageFeature } from '../interfaces/post-message-feature.interface';

@Injectable({
  providedIn: 'root',
})
export class ReceivedMessageToHost implements PostMessageFeature {
  private store!: Store;

  constructor(private injector: Injector) {}

  register(): void {
    this.receiveMessage();
  }

  private receiveMessage(): void {
    window.addEventListener('message', (event) => {
      const message = event.data;

      if (!message) return;

      this.initializeStore();
      this.sendToInternalState(message);
    });
  }

  private sendToInternalState(message: unknown): void {
    this.store.dispatch(new NgxsPmEmbeddedReceive(message));
  }

  private initializeStore() {
    this.store ??= this.injector.get(Store);
  }
}
