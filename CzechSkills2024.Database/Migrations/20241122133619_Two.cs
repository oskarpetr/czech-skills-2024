using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CzechSkills2024.Database.Migrations
{
    /// <inheritdoc />
    public partial class Two : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TestingId",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Testing",
                columns: table => new
                {
                    TestingId = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Testing", x => x.TestingId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_TestingId",
                table: "Users",
                column: "TestingId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Testing_TestingId",
                table: "Users",
                column: "TestingId",
                principalTable: "Testing",
                principalColumn: "TestingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Testing_TestingId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Testing");

            migrationBuilder.DropIndex(
                name: "IX_Users_TestingId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "TestingId",
                table: "Users");
        }
    }
}
