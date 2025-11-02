import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxsPostMessagePluginModule } from '@ngxs-postmessage/postmessage-plugin';

@Component({
  imports: [RouterModule, NgxsPostMessagePluginModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {}
