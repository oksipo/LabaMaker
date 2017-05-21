using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AspNetCoreSpa.DAL;
using DAL.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading.Tasks;
using LogLevel = Microsoft.Extensions.Logging.LogLevel;
using System.IO;
using Microsoft.Net.Http.Headers;

namespace LabaMaker.Web.Server.Controllers.api
{
    [Produces("application/json")]
    [Route("api/WorkAttachments")]
    public class WorkAttachmentsController : Controller
    {

        CloudStorageAccount storageAccount = new CloudStorageAccount(
     new Microsoft.WindowsAzure.Storage.Auth.StorageCredentials(
     "labamakerfiles",
     "rnwrksTo9j35m2uGvEyknz0q+WlsQg7MksCnUluCTC7OXSBkOImh5D2ZnRnfzpvr1KZ0z8xKEIhEUVYupuPh8Q=="), true);
        private readonly ApplicationDbContext _context;

        public WorkAttachmentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/WorkAttachments
        [HttpGet]
        public IEnumerable<WorkAttachment> GetWorkAttachments()
        {

            return null;
        }

        // GET: api/WorkAttachments/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkAttachment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workAttachment = await _context.WorkAttachments.SingleOrDefaultAsync(m => m.Id == id);

            if (workAttachment == null)
            {
                return NotFound();
            }

            return Ok(workAttachment);
        }

        // PUT: api/WorkAttachments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkAttachment([FromRoute] int id, [FromBody] WorkAttachment workAttachment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workAttachment.Id)
            {
                return BadRequest();
            }

            _context.Entry(workAttachment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkAttachmentExists(id))
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

        // POST: api/WorkAttachments
        [HttpPost("{workId}")]
        public async Task<IActionResult> PostWorkAttachment([FromRoute]  int workId)
        {
            var storageClient = storageAccount.CreateCloudBlobClient();
            var container = storageClient.GetContainerReference("workattachments");
            long size = 0;
            
            var files = Request.Form.Files;
            foreach (var file in files)
            {
                var filename = ContentDispositionHeaderValue
                                .Parse(file.ContentDisposition)
                                .FileName
                                .Trim('"');
                filename = $@"\{filename}"+workId;
                var cloudBlob = container.GetBlockBlobReference(filename);
                size += file.Length;
                using (Stream fs = file.OpenReadStream())
                {
                  await  cloudBlob.UploadFromStreamAsync(fs);
                }
            }
            string message = $"{files.Count} file(s) /" +
                $"{ size} bytes uploaded successfully!";
    return Json(message);
        }

        // DELETE: api/WorkAttachments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkAttachment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workAttachment = await _context.WorkAttachments.SingleOrDefaultAsync(m => m.Id == id);
            if (workAttachment == null)
            {
                return NotFound();
            }

            _context.WorkAttachments.Remove(workAttachment);
            await _context.SaveChangesAsync();

            return Ok(workAttachment);
        }

        private bool WorkAttachmentExists(int id)
        {
            return _context.WorkAttachments.Any(e => e.Id == id);
        }
    }
}