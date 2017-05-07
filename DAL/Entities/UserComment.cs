using System;
using DAL.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspNetCoreSpa.DAL.Entities
{
    public class UserComment : IEntityBase
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public bool IsPositive { get; set; }
        
        public ApplicationUser Author { get; set; }
        public ApplicationUser Target { get; set; }
    }
}