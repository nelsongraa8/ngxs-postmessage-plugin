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
  messageFromEmbedded: string = '';

  constructor(private store: Store) {}

  ngOnInit() {
    window.addEventListener('message', (event) => this.messageListener(event));
  }

  increment() {
    this.number++;

    this.sendToIframe(this.number);
  }

  decrement() {
    this.number--;

    this.sendToIframe(this.number);
  }

  reset() {
    this.number = 0;
    this.sendToIframe(0);
  }

  sendToIframe(value: unknown): void {
    const iframe = this.iframeRef.nativeElement;

    if (!iframe.contentWindow) return;

    const primitive = JSON.stringify(value);

    iframe.contentWindow.postMessage(primitive, 'http://localhost:4300');
  }

  messageListener(event: MessageEvent) {
    if (event.origin !== 'http://localhost:4300') return;

    const data = event.data;

    this.messageFromEmbedded = `${data}`;
    console.log('Message from embedded app:', data);
  }
}
