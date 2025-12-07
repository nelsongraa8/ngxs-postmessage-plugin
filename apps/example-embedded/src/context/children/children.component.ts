import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  PostMessageInternalState,
  PushOutgoing,
} from 'libs/postmessage-plugin/src/lib/handlers/post-message-internal.state';

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
      .select(PostMessageInternalState.getIncoming)
      .subscribe((state) => (this.number = state));
  }

  sendEverOneHundred() {
    this.store.dispatch(new PushOutgoing('envie esto desde el iframe'));
  }
}
