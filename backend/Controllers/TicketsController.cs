using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketManagement.Data;
using TicketManagement.Models;

namespace TicketManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TicketsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Tickets
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var tickets = await _context.Tickets.ToListAsync();
            return Ok(tickets);
        }

        // GET: api/Tickets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetById(int id)
        {
            var ticket = await _context.Tickets.FindAsync(id);

            if (ticket == null)
                return NotFound();

            return Ok(ticket);
        }

        // POST: api/Tickets
        [HttpPost]
        public async Task<IActionResult> Create(Ticket ticket)
        {
            _context.Tickets.Add(ticket);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = ticket.Id }, ticket);
        }

        // PUT: api/Tickets/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Ticket updatedTicket)
        {
            if (id != updatedTicket.Id)
                return BadRequest();

            var existingTicket = await _context.Tickets.FindAsync(id);

            if (existingTicket == null)
                return NotFound();

            existingTicket.Title = updatedTicket.Title;
            existingTicket.Description = updatedTicket.Description;
            existingTicket.Status = updatedTicket.Status;
            existingTicket.AssignedTo = updatedTicket.AssignedTo;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Tickets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var ticket = await _context.Tickets.FindAsync(id);

            if (ticket == null)
                return NotFound();

            _context.Tickets.Remove(ticket);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
