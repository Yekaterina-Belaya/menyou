import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-action-bar',
  imports: [
    MatIcon,
    MatIconButton,
    RouterLink
  ],
  standalone: true,
  templateUrl: './action-bar.html',
  styleUrl: './action-bar.scss',
})
export class ActionBar {
  unreadCount = 3;
}
