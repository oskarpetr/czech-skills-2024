using CzechSkills2024.Database.Tables;
using Microsoft.EntityFrameworkCore;

namespace CzechSkills2024.Database;

public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {}
}