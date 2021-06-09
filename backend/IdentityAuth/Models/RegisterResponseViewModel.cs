using Microsoft.AspNetCore.Identity;

namespace IdentityAuth.Models
{
    public class RegisterResponseViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public RegisterResponseViewModel(IdentityUser user)
        {
            Id = user.Id;
            Name = user.UserName;
            Email = user.Email;
        }
    }
}