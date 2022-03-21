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
    public class TimController : ControllerBase
    {
        public DelegiranjeContext Context { get; set;}

        public TimController (DelegiranjeContext context)
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
            
                return BadRequest(Context.Timovi);
        }

        [Route("DodajTim/{ime}/{mesto}/{imek}/{brlig}")]
        [HttpPost]
        public async Task<ActionResult> DodajTim(string ime, string mesto, string imek, int brlig)
        {
            if(brlig < 1 || brlig > 3)
            {
                return BadRequest("Ne postoji liga tog ranga");
            }

            if(string.IsNullOrWhiteSpace(ime) || ime.Length > 50)
            {
                return BadRequest("Neadekvatno ime tima");
            }

           if(string.IsNullOrWhiteSpace(imek) || imek.Length > 30)
            {
                return BadRequest("Neadekvatno ime kapitena");
            }
            if(string.IsNullOrWhiteSpace(mesto) || mesto.Length > 50)
            {
                return BadRequest("Neadekvatno mesto u kom tim igra");
            }
            try
            {
                 var sud = Context.Timovi.Where(p => p.Ime == ime).FirstOrDefault();
                if(sud != null)
                {
                    return BadRequest("Tim sa tim imenom vec postoji");
                }
                Tim tim = new Tim{
                    Ime = ime,
                    Mesto = mesto,
                    RangLige = brlig,
                    ImeKapitena = imek
                };
                Context.Timovi.Add(tim);
                await Context.SaveChangesAsync();
                return Ok(tim);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PromeniLiguTima/{ImeT}/{NLiga}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniLiguTima(string ImeT, int NLiga)
        {
              if(NLiga < 1 || NLiga > 3)
            {
                return BadRequest("Ne postoji liga tog ranga");
            }

            try
            {
                var tim = Context.Timovi.Where(p => p.Ime == ImeT).FirstOrDefault();
                if(tim != null)
                {
                    tim.RangLige = NLiga;
                    await Context.SaveChangesAsync();
                    return Ok(200);
                }
                return BadRequest("Ne postoji tim sa tim imenom");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [Route("PromeniImeTima/{ImeT}/{NIme}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniImeTima(string ImeT, string NIme)
        {
             if(string.IsNullOrWhiteSpace(NIme) || NIme.Length > 50)
            {
                return BadRequest("Neadekvatno ime tima");
            }

            try
            {
                var tim = Context.Timovi.Where(p => p.Ime == ImeT).FirstOrDefault();
                if(tim != null)
                {
                    tim.ImeKapitena = NIme;
                    await Context.SaveChangesAsync();
                    return Ok(200);
                }
                return BadRequest("Ne postoji tim sa tim imenom");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }



        [Route("IzbrisiTim/{Ime}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisiTim(string Ime)
        {
            try
            {
                var tim = Context.Timovi.Where(p => p.Ime == Ime).FirstOrDefault();
                if(tim != null)
                {
                    Context.Timovi.Remove(tim);
                    await Context.SaveChangesAsync();
                    return Ok(200);
                }
                else{
                    return BadRequest("Ne postoji tim sa tim imenom");
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
