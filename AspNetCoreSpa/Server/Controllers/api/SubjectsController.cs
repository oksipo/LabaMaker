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
    [Route("api/Subjects")]
    public class SubjectsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public SubjectsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Subjects
        [HttpGet]
        public IEnumerable<Subject> GetSubjects()
        {
            return _context.Subjects;
        }

        // GET: api/Subjects/byFaculty/5
        [HttpGet("byFaculty/{FacultyId}")]
        public IEnumerable<Subject> GetSubjectsByFaculty([FromRoute] int FacultyId)
        {
            return _context.Subjects.Where(x=>x.FacultyId==FacultyId).DistinctBy(x=>x.Name);
        }

        // GET: api/Subjects/byCourse/5
        [HttpGet("filtered/{University}&{Faculty}&{Course}")]
        public IEnumerable<Subject> GetSubjectsFiltered([FromRoute]int University,[FromRoute]int Faculty,[FromRoute] int Course)
        {
            var subjects = _context.Subjects.AsQueryable();
            if (University >=1)
                subjects = subjects.Where(x => _context.Faculties.First(y => y.Id == x.FacultyId).UniversityId == University).AsQueryable();
            if (Faculty >=1)
                subjects = subjects.Where(x => x.FacultyId == Faculty);
            if (Course >=1)
                subjects = subjects.Where(x => x.Course == Course);
            return subjects.DistinctBy(x=>x.Name).ToList();
        }

        // GET: api/Subjects/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubject([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subject = await _context.Subjects.SingleOrDefaultAsync(m => m.Id == id);

            if (subject == null)
            {
                return NotFound();
            }

            return Ok(subject);
        }

        // PUT: api/Subjects/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubject([FromRoute] int id, [FromBody] Subject subject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subject.Id)
            {
                return BadRequest();
            }

            _context.Entry(subject).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubjectExists(id))
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

        // POST: api/Subjects
        [HttpPost]
        public async Task<IActionResult> PostSubject([FromBody] Subject subject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Subjects.Add(subject);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubject", new { id = subject.Id }, subject);
        }

        // DELETE: api/Subjects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubject([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subject = await _context.Subjects.SingleOrDefaultAsync(m => m.Id == id);
            if (subject == null)
            {
                return NotFound();
            }

            _context.Subjects.Remove(subject);
            await _context.SaveChangesAsync();

            return Ok(subject);
        }

        private bool SubjectExists(int id)
        {
            return _context.Subjects.Any(e => e.Id == id);
        }
    }
}