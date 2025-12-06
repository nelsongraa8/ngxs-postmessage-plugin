export interface NgxsPostmessagePluginOptions {
  send: SendOptions;
  receive: ReceiveOptions;
}

export interface SendOptions {
  actions?: SendOptionAction[];
  states?: SendOptionState[];
}

export interface ReceiveOptions {
  fromOrigin: string;
  targetState: any;
  actionType?: new (payload: any) => any;
}

export interface ReceiveOptionState {
  type: any;
  from?: string;
  targets?: () => HTMLIFrameElement | HTMLIFrameElement[] | null;
  mode?: 'change' | 'all';
}

export interface ReceiveOptionAction {
  type: any;
  from?: string;
  targets?: () => HTMLIFrameElement | HTMLIFrameElement[] | null;
  mode?: 'change' | 'all';
}

export interface SendOptionState {
  type: any;
  to?: string;
  targets?: () => HTMLIFrameElement | HTMLIFrameElement[];
  mode?: 'change' | 'all';
}

export interface SendOptionAction {
  type: any;
  to?: string;
  targets?: () => HTMLIFrameElement | HTMLIFrameElement[] | null;
  mode?: 'change' | 'all';
}
