import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-detail.html',
  styleUrls: ['./ticket-detail.css']
})
export class TicketDetail implements OnInit {

  ticket?: Ticket;

constructor(
  private route: ActivatedRoute,
  private ticketService: TicketService,
  private router: Router
) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.ticketService.getTickets().subscribe(tickets => {
      this.ticket = tickets.find(t => t.id === id);
    });
  }

  goBack(): void {
  this.router.navigate(['/']);
}
}
