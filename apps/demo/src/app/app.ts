import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

import { PostMessageModule } from '@ngxs-postmessage/postmessage-plugin';

@Component({
  imports: [NxWelcome, RouterModule, PostMessageModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected title = 'demo';
}
