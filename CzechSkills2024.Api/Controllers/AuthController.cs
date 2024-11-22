using CzechSkills2024.Database;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Speckles.Api.BodyModels;
using Speckles.Api.Dto;
using Speckles.Api.Lib;

namespace CzechSkills2024.Api.Controllers;

[ApiController]
[Route(ApiEndpoints.API_BASE)]
public class AuthController : Controller
{
    private readonly ApplicationDbContext _database;
    
    public AuthController(ApplicationDbContext database)
    {
        _database = database;
    }

    /// <summary>
    /// Validates user.
    /// </summary>
    /// <remarks>
    /// This endpoint validates a user.
    /// </remarks>
    /// <response code="201">This endpoint validates a user.</response>
    /// <response code="401">User's username or password is incorrect.</response>
    [ProducesResponseType(typeof(ShortUserDto), 201)]
    [ProducesResponseType(401)]
    [HttpPost(ApiEndpoints.Auth.LOGIN)]
    public IActionResult Login([FromBody] LoginBody loginBody)
    {
        // check if user exists
        var user = _database.Users.FirstOrDefault(x => x.Username == loginBody.username);
        
        if (user == null)
            return Unauthorized();
        
        // check if password is correct
        if(user.Password != loginBody.password)
            return Unauthorized();

        // adapt to short user dto
        var shortUserDto = user.Adapt<ShortUserDto>();
        var response = new ApiResponse(shortUserDto);
        
        return Ok(response);
    }
}