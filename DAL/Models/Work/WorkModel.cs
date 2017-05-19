using System;
using System.Collections.Generic;
using System.Text;

namespace Labamaker.DAL.Models
{
   public class WorkModel
    {
        public int Id { get; set; }
        public string Theme { get; set; }
        public string Description { get; set; }
        public double Rating { get; set; }
        public double Price { get; set; }
        public DateTime CreationDate { get; set; }
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        public int FacultyId { get; set; }
        public string FacultyName { get; set; }
        public int UniversityId { get; set; }
        public string UniversityName { get; set; }
        public int Course { get; set; }
        public WorkUserModel Author { get; set; }
    }
}
