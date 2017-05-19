using System;
using System.Collections.Generic;

namespace DAL.Entities
{
    public class Subject : IEntityBase
    {
        public int Id { get;set; }
        
        public string Name { get; set; }

        public int Course { get; set;}

        public int FacultyId { get; set; }

        public Faculty Faculty;

        public List<Work> works { get; set; }
    }
}