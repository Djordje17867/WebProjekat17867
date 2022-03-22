using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MecController : ControllerBase
    {
        public DelegiranjeContext Context { get; set;}

        public MecController (DelegiranjeContext context)
        {
            Context = context;
        }

        [Route("Preuzmi/{id}")]
        [HttpGet]
        public async Task<ActionResult> Preuzmi(int id)
        {
            await Task.Run(async () => 
            {
                await Task.Delay(1000);
            });
            
                return BadRequest(Context.Mecevi);
        }

        [Route("DodajMec/{imet1}/{imet2}/{licsud1}/{licsud2}/{licsud3}/{licsud4}/{licdel}/{kolo}")]
        [HttpPost]
        public async Task<ActionResult> DodajMec(string imet1, string imet2, int licsud1, int licsud2, int licsud3, int licsud4, int licdel, int kolo)
        {
            await Task.Run(async () => 
            {
                await Task.Delay(1000);
            });
            
            if(licdel < 0)
            {
                return BadRequest("Ne postoji broj licence delegata");
            }
            if(imet1.Length>50 || imet2.Length>50 )
            {
                return BadRequest("Uneli ste preveliko ime tima");
            }
            if(licsud1 <1 || licsud2 < 1 || licsud3 <1 || licsud4 <1)
            {
                return BadRequest("Uneli ste los broj licence sudija");
            }
            if(kolo < 1 || kolo>5)
            {
                return BadRequest("Nije dobro kolo");
            }

            try
            {
                    var sudlic = new int[]{licsud1, licsud2, licsud3, licsud4};
                    var ImeTimova = new string[]{imet1, imet2};
                    var sudije = await Context.Sudije.Where(p => sudlic.Contains(p.BrLicence)).ToListAsync();
                    var delegat = await Context.Delegati.Where(p => p.BrLicence == licdel).FirstOrDefaultAsync();
                    var timovi = await Context.Timovi.Where(p => ImeTimova.Contains(p.Ime)).ToListAsync();
                    var mecevi = await Context.Mecevi.Where(p=> p.Kolo == kolo && (p.SpojTim.Contains(timovi[0]) || p.SpojTim.Contains(timovi[1]) )).ToListAsync();
                    if (mecevi != null)
                    {
                        return BadRequest("Timovi vec igraju u tom kolu");
                    }
                    if(timovi.First().RangLige != timovi[1].RangLige)
                    {
                        return BadRequest("Timovi ne igraju u istoj ligi");
                    }
                    Mec m = new Mec
                    {
                        SpojSudija = sudije,
                        SpojTim = timovi,
                        Delegat = delegat,
                        Kolo = kolo
                    };
                    Context.Mecevi.Add(m);
                    await Context.SaveChangesAsync();
                    return Ok(m);
                    /*var mecevi = await Context.Mecevi
                        .Include(p=> p.SpojSudija)
                        .Include(p=> p.SpojTim)
                        .Include(p=> p.Delegat)
                        .Where(p=> p.Kolo == kolo )
                        .ToListAsync();
                    return Ok(mecevi);*/
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("VratiKolo/{kolo}")]
        [HttpGet]
        public async Task<ActionResult> VratiKolo(int kolo)
        {
            if(kolo < 1 || kolo > 22)
            {
                return BadRequest("Odabrano nepostojece kolo");
            }
            var mecevi = await Context.Mecevi
            .Include(p => p.Delegat)
            .Include(p => p.SpojTim)
            .Where(p => p.Kolo == kolo)
            .Select(p =>
            new
            {
                kolo = p.Kolo,
                timovi = p.SpojTim.Select(q =>
                new
                {
                    q.Ime,
                    q.Mesto
                }),
                /*imedelegata = p.Delegat.Ime,
                prezimedelegata = p.Delegat.Prezime*/


            })
            .ToListAsync();
            return Ok(mecevi);

        }
        [Route("VratiMec/{imet1}/{imet2}")]
        [HttpGet]
        public async Task<ActionResult> VratiMec(string imet1, string imet2){
            if(imet1.Length>50 || imet2.Length>50 )
            {
                return BadRequest("Uneli ste preveliko ime tima");
            }
            var tim1 = await Context.Timovi
            .Where(p => p.Ime == imet1)
            .FirstOrDefaultAsync();
            var tim2 = await Context.Timovi
            .Where(p => p.Ime == imet2)
            .FirstOrDefaultAsync();
            var mec = await Context.Mecevi
            .Include(p => p.SpojTim)
            .Include(p => p.SpojSudija)
            .Where(p => p.SpojTim.Contains(tim1) && p.SpojTim.Contains(tim2))
            .Select(p => 
            new{
                kolo = p.Kolo,
                imet1 = imet1,
                imet2 = imet2,
                sudija1 = p.SpojSudija.Select(q =>
                new
                {
                    Ime1 = q.Ime,
                    Prezime1 = q.Prezime
                }),
                imedelegata = p.Delegat.Ime,
                prezdelegata = p.Delegat.Prezime
            })
            .FirstOrDefaultAsync();
            return Ok(mec);
        }


        
        //izbrisi 
    }
}
