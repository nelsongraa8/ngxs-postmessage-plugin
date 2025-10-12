import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostMessageModule } from '@ngxs-postmessage/postmessage-plugin';
import { Store } from '@ngxs/store';
import { Decrement, Increment, Reset } from '../context/ngxs/counter.actions';
import { CounterState } from '../context/ngxs/counter.state';

@Component({
  imports: [RouterModule, PostMessageModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnInit {
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
