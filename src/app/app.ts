import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@shared/components/layout/footer/footer';
import { Sidebar } from '@shared/components/layout/sidebar/sidebar';
import { Header } from '@shared/components/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Sidebar, Header],
  standalone: true,
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('menyou-app');
}
