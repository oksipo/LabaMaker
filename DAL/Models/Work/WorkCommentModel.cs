using System;
using System.Collections.Generic;
using System.Text;

namespace Labamaker.DAL.Models
{
   public class WorkCommentModel
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public int Rating { get; set; }
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
    }
}
