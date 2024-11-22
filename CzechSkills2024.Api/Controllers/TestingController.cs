using CzechSkills2024.Database;
using CzechSkills2024.Database.Tables;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Speckles.Api.BodyModels;
using Speckles.Api.Dto;
using Speckles.Api.Lib;

namespace CzechSkills2024.Api.Controllers;

[ApiController]
[Route(ApiEndpoints.API_BASE)]
public class TestingController : Controller
{
    private readonly ApplicationDbContext _database;
    
    public TestingController(ApplicationDbContext database)
    {
        _database = database;
    }

    /// <summary>
    /// Retrieves user testing.
    /// </summary>
    /// <remarks>
    /// This endpoint retrieves testing by user id.
    /// </remarks>
    /// <response code="201">This endpoint retrieves testing by user id.</response>
    /// <response code="401">User's id was not found.</response>
    [ProducesResponseType(typeof(UserDto), 201)]
    [ProducesResponseType(404)]
    [HttpGet(ApiEndpoints.Testing.TESTING_BY_USER)]
    public IActionResult GetTestingByUser([FromRoute] string userId)
    {
        // check if user exists
        var user = _database.Users.FirstOrDefault(x => x.UserId == userId);
        
        if (user == null)
            return NotFound();

        // adapt to user dto
        var userDto = user.Adapt<UserDto>();
        var response = new ApiResponse(userDto);
        
        return Ok(response);
    }
    
    /// <summary>
    /// Retrieves user testing.
    /// </summary>
    /// <remarks>
    /// This endpoint retrieves testing by user id.
    /// </remarks>
    /// <response code="201">This endpoint retrieves testing by user id.</response>
    /// <response code="401">User's id was not found.</response>
    [ProducesResponseType(typeof(UserDto), 201)]
    [ProducesResponseType(404)]
    [HttpPost(ApiEndpoints.Testing.UPDATE_TESTING)]
    public IActionResult UpdateTestingByUser([FromRoute] string userId, [FromBody] TestingBody testingBody)
    {
        // check if user exists
        var user = _database.Users.FirstOrDefault(x => x.UserId == userId);
        
        if (user == null)
            return NotFound();
        
        // check if testing exists
        var testing = _database.Testings.FirstOrDefault(x => x.TestingId == testingBody.TestingId);
        
        if (testing == null)
            return NotFound();
        
        // check if user testing exists
        var userTesting = _database.UserTestings.FirstOrDefault(x => x.UserId == userId && x.TestingId == testingBody.TestingId);

        // if user testing exists, remove it
        if (userTesting != null)
        {
            _database.UserTestings.Remove(userTesting);
        }
        
        _database.SaveChanges();
        
        // create new user testing
        var newUserTesting = new UserTesting()
        {
            UserId = userId,
            TestingId = testingBody.TestingId,
        };
        
        // add new user testing & save
        _database.UserTestings.Add(newUserTesting);
        _database.SaveChanges();
        
        return NoContent();
    }
}