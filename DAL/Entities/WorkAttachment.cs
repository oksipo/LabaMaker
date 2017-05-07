using System;

namespace DAL.Entities
{
    public class WorkAttachment : IEntityBase
    {
      public  int Id { get ;set; }
      public string Name { get; set; }
        public string Path { get; set; }
        public long Size { get; set; }
        public string Extension { get; set; }

        public int WorkId { get; set; }
        public Work Work { get; set; }
    }
}