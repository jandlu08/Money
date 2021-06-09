using System;
using System.ComponentModel.DataAnnotations;

namespace IdentityAuth.Models
{
    public class LoginRequestViewModel
    {
        [Required]  
        public String Username { get; set; }  
  
        [Required]  
        public String Password { get; set; }  
    }
}