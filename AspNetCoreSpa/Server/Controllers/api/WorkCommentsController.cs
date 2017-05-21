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
    [Route("api/WorkComments")]
    public class WorkCommentsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public WorkCommentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/WorkComments
        [HttpGet]
        public IEnumerable<WorkCommentModel> GetWorkComments()
        {
            return _context.WorkComments.Select(x=>new WorkCommentModel
            {
                Id=x.Id,
                AuthorId=x.AuthorId,
                Message=x.Message,
                Rating=x.Rating,
                AuthorName="@"+_context.ApplicationUsers.Where(y=>y.Id==x.AuthorId).First().Name
            });
        }

        // GET: api/WorkComments/forwork/5
        [HttpGet("forwork/{workId}")]
        public IEnumerable<WorkCommentModel> GetWorkCommentsForWork([FromRoute]int workId)
        {
            return _context.WorkComments
                .Where(x=>x.WorkId==workId)
                .Select(x => new WorkCommentModel
            {
                Id = x.Id,
                AuthorId = x.AuthorId,
                Message = x.Message,
                Rating = x.Rating,
                AuthorName = "@" + _context.ApplicationUsers.Where(y => y.Id == x.AuthorId).First().Name
            });
        }

        // GET: api/WorkComments/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkComment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workComment = await _context.WorkComments.SingleOrDefaultAsync(m => m.Id == id);

            if (workComment == null)
            {
                return NotFound();
            }

            return Ok(workComment);
        }

        // PUT: api/WorkComments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkComment([FromRoute] int id, [FromBody] WorkComment workComment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workComment.Id)
            {
                return BadRequest();
            }

            _context.Entry(workComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkCommentExists(id))
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

        // POST: api/WorkComments
        [HttpPost]
        public async Task<IActionResult> PostWorkComment([FromBody] WorkComment workComment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.WorkComments.Add(workComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkComment", new { id = workComment.Id }, workComment);
        }

        // DELETE: api/WorkComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkComment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workComment = await _context.WorkComments.SingleOrDefaultAsync(m => m.Id == id);
            if (workComment == null)
            {
                return NotFound();
            }

            _context.WorkComments.Remove(workComment);
            await _context.SaveChangesAsync();

            return Ok(workComment);
        }

        private bool WorkCommentExists(int id)
        {
            return _context.WorkComments.Any(e => e.Id == id);
        }
    }
}