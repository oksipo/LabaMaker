using System;
using System.Collections.Generic;
using System.Text;

namespace Labamaker.DAL.Models
{
   public class UserModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int Rating { get; set; }
        public double Balance { get; set; }
        public string UserPic { get; set; }
    }
}
