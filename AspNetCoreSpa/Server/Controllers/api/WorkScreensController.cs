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
    [Route("api/WorkScreens")]
    public class WorkScreensController : Controller
    {
        private readonly ApplicationDbContext _context;

        public WorkScreensController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/WorkScreens
        [HttpGet]
        public IEnumerable<WorkScreen> GetWorkScreens()
        {
            return _context.WorkScreens;
        }

        // GET: api/WorkScreens
        [HttpGet("forWork/{workId}")]
        public IEnumerable<WorkScreen> GetWorkScreensForWork([FromRoute] int workId)
        {
            return _context.WorkScreens.Where(x=>x.WorkId==workId);
        }

        // GET: api/WorkScreens/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkScreen([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workScreen = await _context.WorkScreens.SingleOrDefaultAsync(m => m.Id == id);

            if (workScreen == null)
            {
                return NotFound();
            }

            return Ok(workScreen);
        }

        // PUT: api/WorkScreens/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkScreen([FromRoute] int id, [FromBody] WorkScreen workScreen)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workScreen.Id)
            {
                return BadRequest();
            }

            _context.Entry(workScreen).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkScreenExists(id))
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

        // POST: api/WorkScreens
        [HttpPost]
        public async Task<IActionResult> PostWorkScreen([FromBody] WorkScreen workScreen)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.WorkScreens.Add(workScreen);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkScreen", new { id = workScreen.Id }, workScreen);
        }

        // DELETE: api/WorkScreens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkScreen([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workScreen = await _context.WorkScreens.SingleOrDefaultAsync(m => m.Id == id);
            if (workScreen == null)
            {
                return NotFound();
            }

            _context.WorkScreens.Remove(workScreen);
            await _context.SaveChangesAsync();

            return Ok(workScreen);
        }

        private bool WorkScreenExists(int id)
        {
            return _context.WorkScreens.Any(e => e.Id == id);
        }
    }
}