namespace CzechSkills2024.Database.Tables;

public class UserTesting
{
    public string UserTestingId { get; set; } = Guid.NewGuid().ToString();

    public string GameKey { get; set; } = Guid.NewGuid().ToString();
    
    public string UserId { get; set; }
    public virtual User User { get; set; }
    
    public string TestingId { get; set; }
    public virtual Testing Testing { get; set; }
}