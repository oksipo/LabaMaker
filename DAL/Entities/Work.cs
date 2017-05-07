using AspNetCoreSpa.DAL.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;

namespace DAL.Entities
{
    public class Work : IEntityBase
    {
        public int Id { get ; set; }
        public string Theme { get; set; }
        public string Description { get; set; }
        public double Rating { get; set; }
        public double Price { get; set; }
        public DateTime CreationDate { get; set; }

        public int SubjectId { get; set; }
        public Subject Subject { get; set; }

        public int AuthorId { get; set; }

        [ForeignKey("AuthorId")]
        public ApplicationUser Author { get; set; }

        public List<UserWork> Downloaders { get; set; }
        public List<WorkAttachment> Attachments { get; set; }
        public List<WorkScreen> Screenshots { get; set; }
        public List<WorkComment> Comments { get; set; }
       

    }
}