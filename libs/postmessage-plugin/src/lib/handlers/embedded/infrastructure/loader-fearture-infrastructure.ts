import { Injectable, Injector } from '@angular/core';
import { ReceivedMessageToHost } from './received-message-to-host';
import { SendMessageToHost } from './send-message-to-host';

@Injectable({
  providedIn: 'root',
})
export class LoaderFeatureInfrastructure {
  private received!: ReceivedMessageToHost;
  private send!: SendMessageToHost;

  constructor(private injector: Injector) {}

  loader() {
    this.initializeReceived();
    this.initializeSend();

    this.received.register();
    this.send.register();
  }

  private initializeReceived() {
    this.received ??= this.injector.get(ReceivedMessageToHost);
  }

  private initializeSend() {
    this.send ??= this.injector.get(SendMessageToHost);
  }
}
