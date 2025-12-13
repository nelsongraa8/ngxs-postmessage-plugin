import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import {
  EmbeddedPostMessageBusStateExport,
  NgxsPmEmbeddedSend,
} from '@ngxs-postmessage/postmessage-plugin';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  standalone: true,
})
export class ChildrenComponent implements OnInit {
  number!: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(EmbeddedPostMessageBusStateExport.getReceivedMessages)
      .subscribe((state) => (this.number = state));
  }

  sendEverOneHundred() {
    this.store.dispatch(new NgxsPmEmbeddedSend('envie esto desde el iframe'));
  }
}
