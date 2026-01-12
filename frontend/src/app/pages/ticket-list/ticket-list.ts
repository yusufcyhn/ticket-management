import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.model';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './ticket-list.html',
  styleUrls: ['./ticket-list.css']
})


export class TicketList implements OnInit {

  users: string[] = ['Ali', 'Fatih', 'Yusuf', 'Serdar'];

  tickets: Ticket[] = [];
  editingTicketId: number | null = null;
  updatedTicket: Ticket = {} as Ticket;

  constructor(private ticketService: TicketService, private router: Router) {}
  //constructor(private ticketService: TicketService) {}

  goToCreate(): void {
  this.router.navigate(['/create']); // ticket-create sayfasına yönlendirir
  }

  deleteTicket(id: number): void {
  this.ticketService.deleteTicket(id).subscribe({
    next: () => {
      // ticket silindikten sonra listeden çıkar
      this.tickets = this.tickets.filter(t => t.id !== id);
    },
    error: (err) => console.error('Ticket silinemedi', err)
  });
  }

  editTicket(ticket: Ticket): void {
  this.editingTicketId = ticket.id;
  this.updatedTicket = { ...ticket };
  }

updateTicket(): void {
  if (!this.updatedTicket.id) return;

  this.ticketService.updateTicket(this.updatedTicket.id, this.updatedTicket).subscribe({
    next: (data) => {
      // tickets listesini güncelle
      const index = this.tickets.findIndex(t => t.id === this.updatedTicket.id);
      if (index !== -1) this.tickets[index] = { ...this.updatedTicket }; // güncellenmiş ticket
      this.editingTicketId = null; // düzenleme ekranını kapat
    },
    error: (err) => console.error('Ticket güncellenemedi', err)
  });
}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe({
      next: (data) => this.tickets = data,
      error: (err) => console.error('Ticket yüklenemedi', err)
    });
  }
}
