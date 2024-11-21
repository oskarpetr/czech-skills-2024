namespace Speckles.Api.Lib;

public class ApiResponse
{
    public string RequestId { get; set; } = Guid.NewGuid().ToString();
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    public object Data { get; set; }

    public ApiResponse(object data)
    {
        Data = data;
    }
}