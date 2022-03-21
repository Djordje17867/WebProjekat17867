
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Tim 
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Ime { get; set; }

        [Required]
        [MaxLength(50)]
        public string Mesto { get; set; }

        [Range(1,3)]
        [Required]
        public int RangLige { get; set; }

        [MaxLength(30)]
        public string ImeKapitena { get; set; }
        [JsonIgnore]
        public virtual List<Mec> SpojMecevi { get; set;}


    }
}