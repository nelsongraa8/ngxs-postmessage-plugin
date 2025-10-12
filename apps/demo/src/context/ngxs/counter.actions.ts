export class Increment {
  static readonly type = '[Counter] Increment';
  constructor(public payload: number) {}
}

export class Decrement {
  static readonly type = '[Counter] Decrement';
  constructor(public payload: number) {}
}

export class Reset {
  static readonly type = '[Counter] Reset';
}
