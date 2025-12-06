import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CounterState } from '../ngxs/counter.state';
import { PostMessageInternalState } from 'libs/postmessage-plugin/src/lib/handlers/post-message-internal.state';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  standalone: true,
})
export class ChildrenComponent implements OnInit {
  number!: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(CounterState.getCount)
      .subscribe((state) => (this.number = state));

    this.store
      .select(PostMessageInternalState.getExternalDataInsidePlugin)
      .subscribe((state) => (this.number = state));
  }
}
