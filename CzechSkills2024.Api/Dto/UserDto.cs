using CzechSkills2024.Database.Tables;

namespace Speckles.Api.Dto;

public class UserDto
{
    public string UserId { get; set; }
    public string Username { get; set; }
    public UserTesting? Testing { get; set; }
}