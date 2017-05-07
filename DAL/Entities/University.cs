﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
  public  class University : IEntityBase
    {
        public int Id { get ; set; }
        public string Name { get; set; }


        public List<Faculty> Faculties { get; set; }
    }
}
