using DotNetEnv;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace CzechSkills2024.Database;

public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
{
    public ApplicationDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();

        var connectionString =
            "Host={POSTGRES_HOST};Port={POSTGRES_PORT};Database={POSTGRES_DB};Username={POSTGRES_USER};Password={POSTGRES_PASSWORD};Include Error Detail=true";
        
        Env.Load("../.env");

        var postgresHost = Environment.GetEnvironmentVariable("POSTGRES_HOST");
        var postgresPort = Environment.GetEnvironmentVariable("POSTGRES_PORT");
        var postgresDb = Environment.GetEnvironmentVariable("POSTGRES_DB");
        var postgresUser = Environment.GetEnvironmentVariable("POSTGRES_USER");
        var postgresPassword = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");

        // Connection string
        connectionString = connectionString.Replace("{POSTGRES_HOST}", postgresHost)
            .Replace("{POSTGRES_PORT}", postgresPort)
            .Replace("{POSTGRES_DB}", postgresDb)
            .Replace("{POSTGRES_USER}", postgresUser)
            .Replace("{POSTGRES_PASSWORD}", postgresPassword);

        // Use PostgreSQL
        optionsBuilder.UseNpgsql(connectionString);
        
        return new ApplicationDbContext(optionsBuilder.Options);
    }
}
