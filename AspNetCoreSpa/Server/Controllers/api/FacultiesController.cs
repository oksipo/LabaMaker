using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AspNetCoreSpa.DAL;
using DAL.Entities;
using MoreLinq;

namespace LabaMaker.Web.Server.Controllers.api
{
    [Produces("application/json")]
    [Route("api/Faculties")]
    public class FacultiesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public FacultiesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Faculties
        [HttpGet]
        public IEnumerable<Faculty> GetFaculties()
        {
            return _context.Faculties.DistinctBy(x => x.Name);
        }

        // GET: api/Faculties/byUniversity/5
        [HttpGet("byUniversity/{universityId}")]
        public IEnumerable<Faculty> GetFacultiesByUniversity([FromRoute] int universityId)
        {
            return _context.Faculties.Where(x=>x.UniversityId==universityId).DistinctBy(x=>x.Name);
        }
       

        // GET: api/Faculties/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFaculty([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var faculty = await _context.Faculties.SingleOrDefaultAsync(m => m.Id == id);

            if (faculty == null)
            {
                return NotFound();
            }

            return Ok(faculty);
        }

        // PUT: api/Faculties/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFaculty([FromRoute] int id, [FromBody] Faculty faculty)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != faculty.Id)
            {
                return BadRequest();
            }

            _context.Entry(faculty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FacultyExists(id))
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

        // POST: api/Faculties
        [HttpPost]
        public async Task<IActionResult> PostFaculty([FromBody] Faculty faculty)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Faculties.Add(faculty);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFaculty", new { id = faculty.Id }, faculty);
        }

        // DELETE: api/Faculties/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFaculty([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var faculty = await _context.Faculties.SingleOrDefaultAsync(m => m.Id == id);
            if (faculty == null)
            {
                return NotFound();
            }

            _context.Faculties.Remove(faculty);
            await _context.SaveChangesAsync();

            return Ok(faculty);
        }

        private bool FacultyExists(int id)
        {
            return _context.Faculties.Any(e => e.Id == id);
        }
    }
}