export interface NgxsPostmessagePluginOptions {
  targets?: { name: string; origin: string[]; transfer?: unknown[] }[];
  send: SendOptions;
}

export interface SendOptions {
  actions: SendOptionAction[];
  states: SendOptionState[];
}

export interface SendOptionState {
  type: string;
  to?: string[];
  targets?: () => HTMLIFrameElement | HTMLIFrameElement[];
  mode?: 'change' | 'all';
}

export interface SendOptionAction {
  type: string;
  to?: string[];
  targets?: () => HTMLIFrameElement | HTMLIFrameElement[] | null;
  mode?: 'change' | 'all';
}
