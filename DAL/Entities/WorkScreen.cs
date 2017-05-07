using System;

namespace DAL.Entities
{
    public class WorkScreen : IEntityBase
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public int WorkId { get; set; }
        public Work Work { get; set; }
    }
}