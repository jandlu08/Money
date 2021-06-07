using Microsoft.AspNetCore.Identity;

namespace MoneyApi.Identity.Models
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
    }
}