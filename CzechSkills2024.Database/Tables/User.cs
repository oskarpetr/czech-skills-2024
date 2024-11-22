namespace CzechSkills2024.Database.Tables;

public class User
{
    public string UserId { get; set; } = Guid.NewGuid().ToString();
    public string Username { get; set; }
    public string Password { get; set; }
    
    public string? UserTestingId { get; set; }
    public virtual UserTesting? UserTesting { get; set; }
}