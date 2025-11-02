import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Increment, Decrement, Reset } from '../ngxs/counter.actions';
import { CounterState } from '../ngxs/counter.state';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
})
export class FatherComponent {
  number: number = 0;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(CounterState.getCount)
      .subscribe((number) => (this.number = number));
    this.store.dispatch(new Increment(this.number));
  }

  increment() {
    this.store.dispatch(new Increment(this.number++));
  }

  decrement() {
    this.store.dispatch(new Decrement(this.number--));
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
