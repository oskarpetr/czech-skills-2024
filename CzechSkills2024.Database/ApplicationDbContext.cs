using CzechSkills2024.Database.Tables;
using Microsoft.EntityFrameworkCore;

namespace CzechSkills2024.Database;

public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Testing> Testings { get; set; }
    public DbSet<UserTesting> UserTestings { get; set; }
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {}
    
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasOne(u => u.UserTesting)
            .WithOne(ut => ut.User)
            .HasForeignKey<UserTesting>(ut => ut.UserId);

        modelBuilder.Entity<UserTesting>()
            .HasOne(ut => ut.Testing)
            .WithMany()
            .HasForeignKey(ut => ut.TestingId);
    }
}