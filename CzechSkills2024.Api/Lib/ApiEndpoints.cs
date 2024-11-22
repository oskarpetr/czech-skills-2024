namespace Speckles.Api.Lib;

public static class ApiEndpoints
{
    public const string API_BASE = "api/" + VERSION + "/";
    private const string VERSION = "v1";
    
    public static class Testing
    {
        public const string TESTING_BY_USER = "testing/{userId}";
        public const string UPDATE_TESTING = "testing/{userId}";
    }
    
    public static class Auth
    {
        public const string LOGIN = "auth/login";
    }
}