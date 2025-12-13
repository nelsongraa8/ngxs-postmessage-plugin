import { Injectable, Injector } from '@angular/core';
import { PostMessageFeature } from '../interfaces/post-message-feature.interface';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class SendMessageToHost implements PostMessageFeature {
  private store!: Store;

  constructor(private injector: Injector) {}

  register(): void {
    this.detectSentMessages();
  }

  detectSentMessages(): void {
    this.initializeStore();

    this.store
      .select((state) => state.embeddedMessageBus.sent)
      .subscribe((sentMessages) => {
        if (!sentMessages) {
          return;
        }

        this.sendMessage(sentMessages);
      });
  }

  private sendMessage(message: unknown): void {
    window.parent?.postMessage(message, '*');
  }

  private initializeStore() {
    this.store ??= this.injector.get(Store);
  }
}
