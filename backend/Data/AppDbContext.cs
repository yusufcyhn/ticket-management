using Microsoft.EntityFrameworkCore;
using TicketManagement.Models;

namespace TicketManagement.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Ticket> Tickets => Set<Ticket>();
    }
}
