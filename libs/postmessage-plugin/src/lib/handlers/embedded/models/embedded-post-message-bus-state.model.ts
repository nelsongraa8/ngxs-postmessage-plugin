export interface EmbeddedPostMessageBusStateModel<TMessage = unknown> {
  received: TMessage;
  sent: TMessage;
}
