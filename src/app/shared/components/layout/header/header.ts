import { Component } from '@angular/core';
import { UserBar } from '@shared/components/layout/user-bar/user-bar';
import { ActionBar } from '@shared/components/layout/action-bar/action-bar';

@Component({
  selector: 'app-header',
  imports: [
    UserBar,
    ActionBar
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {}
