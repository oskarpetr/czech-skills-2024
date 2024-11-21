using CzechSkills2024.Database;
using CzechSkills2024.Database.Tables;
using Microsoft.AspNetCore.Mvc;
using Speckles.Api.Lib;

namespace CzechSkills2024.Api.Controllers;

[ApiController]
[Route(ApiEndpoints.API_BASE)]
public class UsersController : Controller
{
    private readonly ApplicationDbContext _database;
    
    public UsersController(ApplicationDbContext database)
    {
        _database = database;
    }
    
    /// <summary>
    /// Retrieves all users.
    /// </summary>
    /// <remarks>
    /// This endpoint retrieves a list of all users.
    /// </remarks>
    /// <response code="200">Retrieves all users.</response>
    [ProducesResponseType(typeof(List<User>), 200)]
    [HttpGet(ApiEndpoints.Users.GET_USERS)]
    public IActionResult GetUsers()
    {
        var users = _database.Users.ToList();

        return Ok(users);
    }
}