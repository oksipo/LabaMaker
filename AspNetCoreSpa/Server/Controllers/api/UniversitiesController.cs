using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AspNetCoreSpa.DAL;
using DAL.Entities;

namespace LabaMaker.Web.Server.Controllers.api
{
    [Produces("application/json")]
    [Route("api/Universities")]
    public class UniversitiesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UniversitiesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Universities
        [HttpGet]
        public IEnumerable<University> GetUniversities()
        {
            return _context.Universities;
        }

        // GET: api/Universities/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUniversity([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var university = await _context.Universities.SingleOrDefaultAsync(m => m.Id == id);

            if (university == null)
            {
                return NotFound();
            }

            return Ok(university);
        }

        // PUT: api/Universities/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUniversity([FromRoute] int id, [FromBody] University university)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != university.Id)
            {
                return BadRequest();
            }

            _context.Entry(university).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UniversityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Universities
        [HttpPost]
        public async Task<IActionResult> PostUniversity([FromBody] University university)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Universities.Add(university);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUniversity", new { id = university.Id }, university);
        }

        // DELETE: api/Universities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUniversity([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var university = await _context.Universities.SingleOrDefaultAsync(m => m.Id == id);
            if (university == null)
            {
                return NotFound();
            }

            _context.Universities.Remove(university);
            await _context.SaveChangesAsync();

            return Ok(university);
        }

        private bool UniversityExists(int id)
        {
            return _context.Universities.Any(e => e.Id == id);
        }
    }
}