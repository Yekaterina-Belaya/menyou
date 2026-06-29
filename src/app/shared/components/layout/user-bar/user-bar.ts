import { Component } from '@angular/core';

@Component({
  selector: 'app-user-bar',
  imports: [],
  templateUrl: './user-bar.html',
  styleUrl: './user-bar.scss',
  standalone: true
})
export class UserBar {
  userName = 'Екатерина';
  userAvatar = '';
}
