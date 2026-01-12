import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-create.html',
  styleUrls: ['./ticket-create.css']
})
export class TicketCreate {

  users: string[] = ['Ali', 'Fatih', 'Yusuf', 'Serdar'];
  ticket: Ticket = { id: 0, title: '', description: '', status: 'Open', assignedTo: '', createdAt: new Date().toISOString() };
  errorMessage: string = '';

  constructor(private ticketService: TicketService, private router: Router) {}

  createTicket(): void {
    console.log('POST edilen ticket:', this.ticket);
    this.ticketService.createTicket(this.ticket).subscribe({
      next: () => this.router.navigate(['/']),  // Başarılı olursa liste sayfasına dön
      error: (err) => this.errorMessage = 'Ticket oluşturulamadı: ' + err.message
    });
  }
}
