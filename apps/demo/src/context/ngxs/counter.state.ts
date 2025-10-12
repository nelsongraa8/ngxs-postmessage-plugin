import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Increment, Decrement, Reset } from './counter.actions';
import { Injectable } from '@angular/core';

export interface CounterStateModel {
  count: number;
}

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    count: 0,
  },
})
@Injectable()
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

  @Action(Reset)
  reset(ctx: StateContext<CounterStateModel>) {
    const state = ctx.getState();
    ctx.setState({ ...state, count: 0 });
  }
}
