
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Sudija")]
    
    public class Sudija
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int BrLicence { get; set; }

        [Required]
        [MaxLength(30)]
        public string Ime { get; set; }

        [Required]
        [MaxLength(50)]
        public string Prezime { get; set; }
        
        [Required]
        [Range(1,5)]
        public int RdBrLige { get; set; }

        [Required]
        [Range(1,5)]
        public int PolozajSudije { get; set; }
        [JsonIgnore]
        public List<Mec> SpojMec { get; set; }
        
    }
}