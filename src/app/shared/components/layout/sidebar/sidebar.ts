import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subject } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { NavItem } from '@shared/models/nav-item.interface';

@Component({
  selector: 'app-sidebar', // Селектор можно оставить прежним, чтобы не ломать app.component.html
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIcon,
    MatButtonModule,
    NgOptimizedImage
  ]
})
export class Sidebar implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  navItems: NavItem[] = [
    { path: '/menu', label: 'Меню' },
    { path: '/blog', label: 'Блог' },
    { path: '/analytics', label: 'Аналитика' }
  ];

  profileMenuItems: NavItem[] = [
    { path: '/profile', label: 'Профиль', icon: 'account_circle' },
    { path: '/profile/edit', label: 'Настройки', icon: 'settings' },
    { path: '/pricing', label: 'Тарифы', icon: 'stars' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
