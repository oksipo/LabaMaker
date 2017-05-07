using AspNetCoreSpa.DAL.Entities;
using DAL.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace AspNetCoreSpa.DAL
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, int>
    {   public DbSet<UserComment> UserComments { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; } 
        public DbSet<ApplicationRole> ApplicationRoles { get; set; }
        public DbSet<University> Universities { get; set; }
        public DbSet<Faculty> Faculties { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Work> Works { get; set; }
        public DbSet<WorkAttachment> WorkAttachments { get; set; }
        public DbSet<WorkScreen> WorkScreens { get; set; }
        public DbSet<WorkComment> WorkComments { get; set; }
        public DbSet<UserWork> UserWorks { get; set; }
       
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserComment>().HasOne(p => p.Target).WithMany(p => p.Comments).OnDelete(Microsoft.EntityFrameworkCore.Metadata.DeleteBehavior.Restrict);

            modelBuilder.Entity<UserComment>().HasOne(p => p.Author).WithMany(p => p.Commenteds).OnDelete(Microsoft.EntityFrameworkCore.Metadata.DeleteBehavior.Restrict);

            modelBuilder.Entity<UserWork>().HasOne(p=>p.Downloader).WithMany(p=>p.DownloadedWorks).OnDelete(Microsoft.EntityFrameworkCore.Metadata.DeleteBehavior.Restrict);
            modelBuilder.Entity<UserWork>().HasOne(p => p.Work).WithMany(p => p.Downloaders).OnDelete(Microsoft.EntityFrameworkCore.Metadata.DeleteBehavior.Restrict);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
