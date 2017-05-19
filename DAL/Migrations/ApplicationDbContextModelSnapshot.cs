using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AspNetCoreSpa.DAL;

namespace DAL.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AspNetCoreSpa.DAL.Entities.ApplicationRole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Description")
                        .HasMaxLength(250);

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("AspNetCoreSpa.DAL.Entities.ApplicationUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<double>("Balance");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Name");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<int>("Rating");

                    b.Property<string>("SecurityStamp");

                    b.Property<int>("StudNumber");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.Property<string>("UserPicPath");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("AspNetCoreSpa.DAL.Entities.UserComment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AuthorId");

                    b.Property<bool>("IsPositive");

                    b.Property<string>("Message");

                    b.Property<int?>("TargetId");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("TargetId");

                    b.ToTable("UserComments");
                });

            modelBuilder.Entity("DAL.Entities.Faculty", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("UniversityId");

                    b.HasKey("Id");

                    b.HasIndex("UniversityId");

                    b.ToTable("Faculties");
                });

            modelBuilder.Entity("DAL.Entities.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Course");

                    b.Property<int>("FacultyId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("FacultyId");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("DAL.Entities.University", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Universities");
                });

            modelBuilder.Entity("DAL.Entities.UserWork", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("DownloaderId");

                    b.Property<int?>("WorkId");

                    b.HasKey("Id");

                    b.HasIndex("DownloaderId");

                    b.HasIndex("WorkId");

                    b.ToTable("UserWorks");
                });

            modelBuilder.Entity("DAL.Entities.Work", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuthorId");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Description");

                    b.Property<double>("Price");

                    b.Property<double>("Rating");

                    b.Property<int>("SubjectId");

                    b.Property<string>("Theme");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("SubjectId");

                    b.ToTable("Works");
                });

            modelBuilder.Entity("DAL.Entities.WorkAttachment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Extension");

                    b.Property<string>("Name");

                    b.Property<string>("Path");

                    b.Property<long>("Size");

                    b.Property<int>("WorkId");

                    b.HasKey("Id");

                    b.HasIndex("WorkId");

                    b.ToTable("WorkAttachments");
                });

            modelBuilder.Entity("DAL.Entities.WorkComment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuthorId");

                    b.Property<string>("Message");

                    b.Property<int>("Rating");

                    b.Property<int?>("WorkId");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("WorkId");

                    b.ToTable("WorkComments");
                });

            modelBuilder.Entity("DAL.Entities.WorkScreen", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Path");

                    b.Property<int>("WorkId");

                    b.HasKey("Id");

                    b.HasIndex("WorkId");

                    b.ToTable("WorkScreens");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictApplication", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClientId");

                    b.Property<string>("ClientSecret");

                    b.Property<string>("DisplayName");

                    b.Property<string>("LogoutRedirectUri");

                    b.Property<string>("RedirectUri");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.HasIndex("ClientId")
                        .IsUnique();

                    b.ToTable("OpenIddictApplications");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictAuthorization", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ApplicationId");

                    b.Property<string>("Scope");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationId");

                    b.ToTable("OpenIddictAuthorizations");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictScope", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.ToTable("OpenIddictScopes");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictToken", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ApplicationId");

                    b.Property<string>("AuthorizationId");

                    b.Property<string>("Subject");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationId");

                    b.HasIndex("AuthorizationId");

                    b.ToTable("OpenIddictTokens");
                });

            modelBuilder.Entity("AspNetCoreSpa.DAL.Entities.UserComment", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser", "Author")
                        .WithMany("Commenteds")
                        .HasForeignKey("AuthorId");

                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser", "Target")
                        .WithMany("Comments")
                        .HasForeignKey("TargetId");
                });

            modelBuilder.Entity("DAL.Entities.Faculty", b =>
                {
                    b.HasOne("DAL.Entities.University", "University")
                        .WithMany("Faculties")
                        .HasForeignKey("UniversityId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Entities.Subject", b =>
                {
                    b.HasOne("DAL.Entities.Faculty")
                        .WithMany("Subjects")
                        .HasForeignKey("FacultyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Entities.UserWork", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser", "Downloader")
                        .WithMany("DownloadedWorks")
                        .HasForeignKey("DownloaderId");

                    b.HasOne("DAL.Entities.Work", "Work")
                        .WithMany("Downloaders")
                        .HasForeignKey("WorkId");
                });

            modelBuilder.Entity("DAL.Entities.Work", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser", "Author")
                        .WithMany("UploadedWorks")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Entities.Subject", "Subject")
                        .WithMany("works")
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Entities.WorkAttachment", b =>
                {
                    b.HasOne("DAL.Entities.Work", "Work")
                        .WithMany("Attachments")
                        .HasForeignKey("WorkId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Entities.WorkComment", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser", "Author")
                        .WithMany("WorkComments")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Entities.Work")
                        .WithMany("Comments")
                        .HasForeignKey("WorkId");
                });

            modelBuilder.Entity("DAL.Entities.WorkScreen", b =>
                {
                    b.HasOne("DAL.Entities.Work", "Work")
                        .WithMany("Screenshots")
                        .HasForeignKey("WorkId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<int>", b =>
                {
                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AspNetCoreSpa.DAL.Entities.ApplicationUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictAuthorization", b =>
                {
                    b.HasOne("OpenIddict.Models.OpenIddictApplication", "Application")
                        .WithMany("Authorizations")
                        .HasForeignKey("ApplicationId");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictToken", b =>
                {
                    b.HasOne("OpenIddict.Models.OpenIddictApplication", "Application")
                        .WithMany("Tokens")
                        .HasForeignKey("ApplicationId");

                    b.HasOne("OpenIddict.Models.OpenIddictAuthorization", "Authorization")
                        .WithMany("Tokens")
                        .HasForeignKey("AuthorizationId");
                });
        }
    }
}
