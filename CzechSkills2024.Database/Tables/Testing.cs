namespace CzechSkills2024.Database.Tables;

public class Testing
{
    public string TestingId { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; }
    public string Description { get; set; }
}