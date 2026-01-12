import { Routes } from '@angular/router';
import { TicketList } from './pages/ticket-list/ticket-list';
import { TicketCreate } from './pages/ticket-create/ticket-create';
import { TicketDetail } from './pages/ticket-detail/ticket-detail';

export const routes: Routes = [
  { path: '', component: TicketList },
  { path: 'create', component: TicketCreate },
  { path: 'tickets/:id', component: TicketDetail }
];
