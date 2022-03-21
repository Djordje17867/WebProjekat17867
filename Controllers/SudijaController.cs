using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SudijaController : ControllerBase
    {
        public DelegiranjeContext Context { get; set;}

        public SudijaController (DelegiranjeContext context)
        {
            Context = context;
        }

        [Route("Preuzmi")]
        [HttpGet]
        public async Task<ActionResult> Preuzmi(int id)
        {   
              await Task.Run(async () => 
            {
                await Task.Delay(1000);
            });
              var sudije = Context.Sudije.Select(p=> new 
                {
                    ime = p.Ime,
                    prezime = p.Prezime,
                    brlic = p.BrLicence
                });
            
                return Ok(sudije);
        }

        [Route("DodajSudiju/{Ime}/{Prezime}/{RdBrLige}/{BrLicence}/{PolozajSudije}")]
        [HttpPost]
        public async Task<ActionResult> DodajSudiju(string Ime, string Prezime, int RdBrLige, int BrLicence, int PolozajSudije)
        {
            if(BrLicence < 1)
            {
                return BadRequest("Neadekvatan broj licence");
            }

            if(RdBrLige < 1 || RdBrLige > 3)
            {
                return BadRequest("Ne postoji liga tog ranga");
            }

            if(PolozajSudije < 1 || PolozajSudije > 4)
            {
                return BadRequest("Ne postoji takav polozaj sudije");
            }

            if(string.IsNullOrWhiteSpace(Ime) || Ime.Length > 30)
            {
                return BadRequest("Neadekvatno ime");
            }

            if(string.IsNullOrWhiteSpace(Prezime) || Prezime.Length > 50)
            {
                return BadRequest("Neadekvatno prezime");
            }
            try
            {
                var sud = Context.Sudije.Where(p => p.BrLicence == BrLicence).FirstOrDefault();
                if(sud != null)
                {
                    return BadRequest("Sudija sa tim brojem licence vec postoji");
                }
                Sudija sudija = new Sudija{
                    Ime = Ime,
                    Prezime = Prezime,
                    RdBrLige = RdBrLige,
                    BrLicence = BrLicence,
                    PolozajSudije = PolozajSudije

                };
                Context.Sudije.Add(sudija);
                await Context.SaveChangesAsync();
                return Ok(sudija);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzmeniSudiju/{BrLicence}/{Pozicija}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniPozSudije(int BrLicence, int Pozicija)
        {
            if(BrLicence < 1)
            {
                return BadRequest("Neadekvatan broj licence");
            }
            if(Pozicija < 1 || Pozicija > 4)
            {
                return BadRequest("Ne postoji takav polozaj sudije");
            }

            try
            {
                var sudija = Context.Sudije.Where(p => p.BrLicence == BrLicence).FirstOrDefault();
                if(sudija != null)
                {
                    sudija.PolozajSudije = Pozicija;
                    await Context.SaveChangesAsync();
                    return Ok(sudija);
                }
                return BadRequest("Ne postoji sudija sa tim brojem licence");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [Route("PromeniLiguSudije/{BrLicence}/{Liga}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniLiguSudije(int BrLicence, int liga)
        {
            if(BrLicence < 1)
            {
                return BadRequest("Neadekvatan broj licence");
            }

            if(liga < 1 || liga > 3)
            {
                return BadRequest("Ne postoji ta liga");
            }

            try
            {
                var sudija = Context.Sudije.Where(p => p.BrLicence == BrLicence).FirstOrDefault();
                if(sudija != null)
                {
                    sudija.RdBrLige = liga;
                    await Context.SaveChangesAsync();
                    return Ok(sudija);
                }
                return BadRequest("Ne postoji sudija sa tim brojem licence");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        //izmeni sudiju
        [Route("IzbrisiSudiju/{BrLic}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisiSudiju(int BrLic)
        {
            if(BrLic<1)
            {
                return BadRequest("Nevalidan br licence");
            }
            try
            {
                var sudija = Context.Sudije.Where(p => p.BrLicence == BrLic).FirstOrDefault();
                if(sudija != null)
                {
                    Context.Sudije.Remove(sudija);
                    await Context.SaveChangesAsync();
                    return Ok(200);
                }
                else{
                    return BadRequest("Nema sudije sa tim brojem licence");
                }
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        //izbrisi 
    }
}
