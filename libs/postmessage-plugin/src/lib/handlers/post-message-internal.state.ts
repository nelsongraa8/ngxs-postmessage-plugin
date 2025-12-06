import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';

export class SetExternalDataInsidePlugin {
  static readonly type = '[Counter] Set External Data Inside Plugin';
  constructor(public payload: any) {}
}

interface PostMessageInternalStateModel {
  data: any;
}

@State<PostMessageInternalStateModel>({
  name: 'postMessageInternal',
  defaults: {
    data: null,
  },
})
@Injectable()
export class PostMessageInternalState {
  @Selector()
  static getExternalDataInsidePlugin(
    state: PostMessageInternalStateModel
  ): any {
    return state.data;
  }

  @Action(SetExternalDataInsidePlugin)
  setExternalDataPlugin(
    ctx: StateContext<PostMessageInternalStateModel>,
    action: SetExternalDataInsidePlugin
  ) {
    const state = ctx.getState();
    ctx.setState(patch({ ...state, data: action.payload }));
  }
}
