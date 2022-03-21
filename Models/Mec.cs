using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Mec
    {
        [Key]
        public int MecID { get; set; }
        [Required]
        [Range(1,22)]
        public int Kolo { get; set; }

        public virtual Delegat Delegat { get; set; }
        
        
        public List<Sudija> SpojSudija { get; set; }

        public List<Tim> SpojTim { get; set; }


        

    }
}