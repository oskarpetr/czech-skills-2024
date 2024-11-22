namespace Speckles.Api.Lib;

public static class ApiEndpoints
{
    public const string API_BASE = "api/" + VERSION + "/";
    private const string VERSION = "v1";
    
    public static class Users
    {
        public const string GET_USERS = "users";
    }
    
    public static class Auth
    {
        public const string LOGIN = "auth/login";
    }
}