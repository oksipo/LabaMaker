using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AspNetCoreSpa.DAL;
using DAL.Entities;
using Labamaker.DAL.Models;

namespace LabaMaker.Web.Server.Controllers.api
{
    [Produces("application/json")]
    [Route("api/Works")]
    public class WorksController : Controller
    {
        private readonly ApplicationDbContext _context;

        public WorksController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Works
        [HttpGet]
        public IEnumerable<WorkModel> GetWorks()
        {
           var Subjects = _context.Subjects.ToList();
            var Faculties = _context.Faculties.Include(x=>x.University).ToList();
            var Universities = _context.Universities.ToList();
            return _context.Works.Include(x => x.Author).Select(x => new WorkModel
            {
                Id = x.Id,
                Theme = x.Theme,
                Description = x.Description,
                CreationDate = x.CreationDate,
                Price = x.Price,
                Rating = x.Rating,
                SubjectId = x.SubjectId,
                SubjectName=Subjects.Single(y=>y.Id==x.SubjectId).Name,
                Course = Subjects.Single(y => y.Id == x.SubjectId).Course,
                FacultyId= Subjects.Single(y => y.Id == x.SubjectId).FacultyId,
                FacultyName= Faculties.Single(y=>y.Id==Subjects.Single(z=>z.Id==x.SubjectId).FacultyId).Name,
                UniversityId= Faculties.Single(y => y.Id == Subjects.Single(z => z.Id == x.SubjectId).FacultyId).UniversityId,
                UniversityName=Universities.Single(y=>y.Id == Faculties.Single(k =>k.Id == Subjects.Single(z => z.Id == x.SubjectId).FacultyId).UniversityId).Name,
                Author = new WorkUserModel
                {
                    Id = x.Author.Id,
                    Name = x.Author.Name,
                    Rating = x.Author.Rating,
                    UserPicPath = x.Author.UserPicPath
                }
            }).ToList();
        }

        // GET: api/Works/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWork([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var work = await _context.Works.SingleOrDefaultAsync(m => m.Id == id);

            if (work == null)
            {
                return NotFound();
            }

            return Ok(work);
        }

        // PUT: api/Works/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWork([FromRoute] int id, [FromBody] Work work)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != work.Id)
            {
                return BadRequest();
            }

            _context.Entry(work).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkExists(id))
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

        // POST: api/Works
        [HttpPost]
        public async Task<IActionResult> PostWork([FromBody] Work work)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Works.Add(work);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWork", new { id = work.Id }, work);
        }

        // DELETE: api/Works/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWork([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var work = await _context.Works.SingleOrDefaultAsync(m => m.Id == id);
            if (work == null)
            {
                return NotFound();
            }

            _context.Works.Remove(work);
            await _context.SaveChangesAsync();

            return Ok(work);
        }

        private bool WorkExists(int id)
        {
            return _context.Works.Any(e => e.Id == id);
        }
    }
}