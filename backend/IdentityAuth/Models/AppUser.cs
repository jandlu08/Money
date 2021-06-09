using Microsoft.AspNetCore.Identity;

namespace IdentityAuth.Models
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
    }
}