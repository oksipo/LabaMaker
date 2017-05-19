using System;
using System.Collections.Generic;
using System.Text;

namespace Labamaker.DAL.Models
{
   public class WorkAttachmentModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public long Size { get; set; }
        public string Extension { get; set; }
    }
}
