using System.Reflection;
using System.Text.Json.Serialization;
using CzechSkills2024.Database;
using DotNetEnv;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Load env
// Env.Load("../.env");

builder.Configuration.AddJsonFile("appsettings.api.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.api.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

var postgresHost = builder.Configuration["POSTGRES_HOST"];
var postgresPort = builder.Configuration["POSTGRES_PORT"];
var postgresDb = builder.Configuration["POSTGRES_DB"];
var postgresUser = builder.Configuration["POSTGRES_USER"];
var postgresPassword = builder.Configuration["POSTGRES_PASSWORD"];

// Connection string
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
connectionString = connectionString.Replace("{POSTGRES_HOST}", postgresHost)
    .Replace("{POSTGRES_PORT}", postgresPort)
    .Replace("{POSTGRES_DB}", postgresDb)
    .Replace("{POSTGRES_USER}", postgresUser)
    .Replace("{POSTGRES_PASSWORD}", postgresPassword);

// Use postgreSQL
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

// Json options
builder.Services.AddControllers().AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendCors",
        builder => builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

// Swagger docs
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo()
    {
        Title = "Czech Skills API",
        Version = "v1",
        Description = "The Czech Skills API provides seamless access to the Czech Skills platform."
    });

    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("FrontendCors");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();