import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { EmbeddedPostMessageBusStateModel } from './models/embedded-post-message-bus-state.model';
import { LoaderFeatureInfrastructure } from './infrastructure/loader-fearture-infrastructure';
import { Inject, Injectable, Injector } from '@angular/core';

export class NgxsPmEmbeddedSend {
  static readonly type = '[EmbeddedMessageBus] Send';
  constructor(public payload: any) {}
}

export class NgxsPmEmbeddedReceive {
  static readonly type = '[EmbeddedMessageBus] Receive';
  constructor(public payload: any) {}
}

@Injectable({
  providedIn: 'root',
})
@State<EmbeddedPostMessageBusStateModel>({
  name: 'embeddedMessageBus',
  defaults: {
    received: null,
    sent: null,
  },
})
export class EmbeddedPostMessageBusState implements NgxsOnInit {
  constructor(private injector: Injector) {}

  ngxsOnInit() {
    const loader = this.injector.get(LoaderFeatureInfrastructure);
    loader.loader();
  }

  @Selector()
  static getReceivedMessages(state: EmbeddedPostMessageBusStateModel) {
    return state.received;
  }

  @Selector()
  static getSentMessages(state: EmbeddedPostMessageBusStateModel) {
    return state.sent;
  }

  @Action(NgxsPmEmbeddedSend)
  send(
    ctx: StateContext<EmbeddedPostMessageBusStateModel>,
    action: NgxsPmEmbeddedSend
  ) {
    ctx.patchState({
      sent: action.payload,
    });
  }

  @Action(NgxsPmEmbeddedReceive)
  receive(
    ctx: StateContext<EmbeddedPostMessageBusStateModel>,
    action: NgxsPmEmbeddedReceive
  ) {
    ctx.patchState({
      received: action.payload,
    });
  }
}
