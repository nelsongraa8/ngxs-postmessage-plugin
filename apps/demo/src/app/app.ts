import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { PostMessageModule } from '../../../../libs/ngxs/postmessage-plugin/src/lib/postmessage.module';

@Component({
  imports: [NxWelcome, RouterModule, PostMessageModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'demo';
}
