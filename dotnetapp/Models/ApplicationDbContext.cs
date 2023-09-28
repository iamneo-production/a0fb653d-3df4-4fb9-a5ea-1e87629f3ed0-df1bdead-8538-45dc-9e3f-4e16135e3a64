using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Models
{

    public class ApplicationDbContext : IdentityDbContext<IdentityUser>

    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Player> Players { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the User entity and its properties here if needed.
            // For example, you can set constraints, indexes, etc.

            modelBuilder.Entity<User>().HasKey(u => u.Id);

            // Add any additional configuration for the User entity here.

            base.OnModelCreating(modelBuilder);
        }
    }
}
