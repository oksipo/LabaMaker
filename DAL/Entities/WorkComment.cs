using AspNetCoreSpa.DAL.Entities;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class WorkComment : IEntityBase
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public int Rating { get; set; }
        public int AuthorId { get; set; }
        [ForeignKey("AuthorId")]
        public ApplicationUser Author { get; set; }
        public int WorkId { get; set; }
        public Work Work { get; set; }

    }
}