using System;
using System.Collections.Generic;

namespace DAL.Entities
{
    public class Faculty : IEntityBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UniversityId { get; set; }
        public University University { get; set; }

        public List<Subject> Subjects { get; set; }
    }
}