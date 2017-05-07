using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using DAL.Entities;
using System.Collections.Generic;

namespace AspNetCoreSpa.DAL.Entities
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser<int>
    {
      public string Name { get; set; }
      public int StudNumber { get; set; }
      public int Rating { get; set; }
      public string UserPicPath { get; set; }

        public List<Work> UploadedWorks { get; set; }
        public List<UserWork> DownloadedWorks { get; set; }
        public List<WorkComment> WorkComments { get; set; }

        /// <summary>
        /// List of comments made by other Users for this Users
        /// </summary>
        /// 
        public List<UserComment> Comments { get; set; }

        /// <summary>
        /// List of comments User made on other Users
        /// </summary>
        public List<UserComment> Commenteds { get; set; }
    }
}
