import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subject } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    MatDivider,
    MatMenuModule,
    MatIcon,
    MatButtonModule
  ]
})
export class Header implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  isMobileMenuOpen = false;
  isScrolled = false;
  unreadCount = 3;

  // Эти данные должны приходить из AuthService/UserService
  userName = 'Екатерина';
  userAvatar = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Здесь подписка на данные пользователя
    // this.authService.user$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(user => {
    //     this.userName = user?.name || 'Гость';
    //     this.userAvatar = user?.avatar || '';
    //   });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  logout(): void {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
