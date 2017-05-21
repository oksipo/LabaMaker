using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class _6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkComments_Works_WorkId",
                table: "WorkComments");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkComments_Works_WorkId",
                table: "WorkComments",
                column: "WorkId",
                principalTable: "Works",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkComments_Works_WorkId",
                table: "WorkComments");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkComments_Works_WorkId",
                table: "WorkComments",
                column: "WorkId",
                principalTable: "Works",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
