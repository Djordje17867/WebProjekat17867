using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class DelegiranjeContext : DbContext
    {
        public DbSet<Delegat> Delegati {get; set;}

        public DbSet<Mec> Mecevi {get; set;}
        public DbSet<Sudija> Sudije {get; set;}
        public DbSet<Tim> Timovi {get; set;}

        public DelegiranjeContext(DbContextOptions options) : base(options)
        {
            
        }
        


    }
}