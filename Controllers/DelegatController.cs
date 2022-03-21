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
    public class DelegatController : ControllerBase
    {
        public DelegiranjeContext Context { get; set;}

        public DelegatController (DelegiranjeContext context)
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
            
                return BadRequest(Context.Delegati);
        }

        [Route("DodajDelegata/{ime}/{prezime}/{BrLige}/{BrLic}")]
        [HttpPost]
        public async Task<ActionResult> DodajDelegata(string ime, string prezime, int BrLige, int BrLic)
        {
            
            if(BrLige < 1 || BrLige > 3)
            {
                return BadRequest("Ne postoji liga tog ranga");
            }

            if(BrLic < 1)
            {
                return BadRequest("Neadekvatan broj licence");
            }

            if(string.IsNullOrWhiteSpace(ime) || ime.Length > 30)
            {
                return BadRequest("Neadekvatno ime");
            }

            if(string.IsNullOrWhiteSpace(prezime) || prezime.Length > 50)
            {
                return BadRequest("Neadekvatno prezime");
            }
            try
            {
                 var sud = Context.Delegati.Where(p => p.BrLicence == BrLic).FirstOrDefault();
                if(sud != null)
                {
                    return BadRequest("Delegat sa tim brojem licence vec postoji");
                }
                Delegat delegat = new Delegat{
                    Ime = ime,
                    Prezime = prezime,
                    Liga = BrLige,
                    BrLicence = BrLic

                };
                Context.Delegati.Add(delegat);
                await Context.SaveChangesAsync();
                return Ok(delegat);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("PromeniLiguDelegata/{BrLicence}/{liga}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniLiguDelegata(int BrLicence, int liga)
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
                var delegat = Context.Delegati.Where(p => p.BrLicence == BrLicence).FirstOrDefault();
                if(delegat != null)
                {
                    delegat.Liga = liga;
                    await Context.SaveChangesAsync();
                    return Ok(delegat);
                }
                return BadRequest("Ne postoji delegat sa tim brojem licence");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        //izmeni sudiju
        [Route("IzbrisiDelegata/{BrLic}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisiSudiju(int BrLic)
        {
            if(BrLic<1)
            {
                return BadRequest("Nevalidan br licence");
            }
            try
            {
                var delegat = Context.Delegati.Where(p => p.BrLicence == BrLic).FirstOrDefault();
                if(delegat != null)
                {
                    Context.Delegati.Remove(delegat);
                    await Context.SaveChangesAsync();
                    return Ok(200);
                }
                else{
                    return BadRequest("Nema delegata sa tim brojem licence");
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
