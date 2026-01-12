import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecentPagesService } from './services/recent-pages.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  recentPages: string[] = [];

  constructor(
    private router: Router,
    private recentPagesService: RecentPagesService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.recentPagesService.addPage(event.urlAfterRedirects);
        this.recentPages = this.recentPagesService.getRecentPages();
      });
  }
}
