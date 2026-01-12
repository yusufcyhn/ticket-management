import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentPagesService {

  private storageKey = 'recentPages';
  private maxPages = 5;

  addPage(path: string): void {
    const pages = this.getRecentPages();

    // Aynı sayfa varsa tekrar ekleme
    const filtered = pages.filter(p => p !== path);
    filtered.unshift(path);

    const limited = filtered.slice(0, this.maxPages);
    localStorage.setItem(this.storageKey, JSON.stringify(limited));
  }

  getRecentPages(): string[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
