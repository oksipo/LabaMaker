using AspNetCoreSpa.DAL.Entities;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class UserWork : IEntityBase
    {
        public int Id { get; set; }
        public ApplicationUser Downloader { get; set; }
        public Work Work { get; set; }
    }
}