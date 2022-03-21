using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Delegat
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(30)]
        public string Ime { get; set; }

        
        [Required]
        public int BrLicence { get; set; }

        [Required]
        [MaxLength(50)]
        public string Prezime { get; set; }

        [Required]
        [Range(1,5)]
        public int Liga { get; set; }
        [JsonIgnore]
        public virtual List<Mec> Mec { get; set; }



    }
}