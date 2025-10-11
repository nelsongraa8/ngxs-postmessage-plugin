import { State, Action, StateContext, Selector } from '@ngxs/store';

// Definición de acciones
export class Increment {
  static readonly type = '[Counter] Increment';
}

export class Decrement {
  static readonly type = '[Counter] Decrement';
}

export interface CounterStateModel {
  count: number;
}

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    count: 0,
  },
})
export class CounterState {
  @Selector()
  static getCount(state: CounterStateModel): number {
    return state.count;
  }

  @Action(Increment)
  increment(ctx: StateContext<CounterStateModel>) {
    const state = ctx.getState();
    ctx.setState({ ...state, count: state.count + 1 });
  }

  @Action(Decrement)
  decrement(ctx: StateContext<CounterStateModel>) {
    const state = ctx.getState();
    ctx.setState({ ...state, count: state.count - 1 });
  }
}