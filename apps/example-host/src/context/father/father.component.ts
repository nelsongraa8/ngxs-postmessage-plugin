import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { Increment, Decrement, Reset } from '../ngxs/counter.actions';
import { CounterState } from '../ngxs/counter.state';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
})
export class FatherComponent {
  @ViewChild('childrenExampleAppTest', { static: true })
  iframeRef!: ElementRef<HTMLIFrameElement>;

  number: number = 0;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(CounterState.getCount)
      .subscribe((number) => (this.number = number));
    this.store.dispatch(new Increment(this.number));

    window.addEventListener('message', (event) => this.messageListener(event));
  }

  increment() {
    this.store.dispatch(new Increment(this.number++));
    this.sendToIframe(this.number);
  }

  decrement() {
    this.store.dispatch(new Decrement(this.number--));
    this.sendToIframe(this.number);
  }

  reset() {
    this.store.dispatch(new Reset());
    this.sendToIframe('reset');
  }

  sendToIframe(value: unknown): void {
    const iframe = this.iframeRef.nativeElement;
    if (!iframe.contentWindow) return;

    let primitive: string | number | boolean | null;

    if (typeof value === 'object') {
      primitive = value ? JSON.stringify(value) : null;
    }

    primitive = value as string | number | boolean | null;

    iframe.contentWindow.postMessage(primitive, 'http://localhost:4300');
  }

  messageListener(event: MessageEvent) {
    if (event.origin !== 'http://localhost:4300') return;

    const data = event.data;

    console.log('Father received message:', data);
  }
}
