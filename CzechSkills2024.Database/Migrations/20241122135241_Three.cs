using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CzechSkills2024.Database.Migrations
{
    /// <inheritdoc />
    public partial class Three : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Testing_TestingId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_TestingId",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Testing",
                table: "Testing");

            migrationBuilder.RenameTable(
                name: "Testing",
                newName: "Testings");

            migrationBuilder.RenameColumn(
                name: "TestingId",
                table: "Users",
                newName: "UserTestingId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Testings",
                table: "Testings",
                column: "TestingId");

            migrationBuilder.CreateTable(
                name: "UserTestings",
                columns: table => new
                {
                    UserTestingId = table.Column<string>(type: "text", nullable: false),
                    GameKey = table.Column<string>(type: "text", nullable: false),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    TestingId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTestings", x => x.UserTestingId);
                    table.ForeignKey(
                        name: "FK_UserTestings_Testings_TestingId",
                        column: x => x.TestingId,
                        principalTable: "Testings",
                        principalColumn: "TestingId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserTestings_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserTestings_TestingId",
                table: "UserTestings",
                column: "TestingId");

            migrationBuilder.CreateIndex(
                name: "IX_UserTestings_UserId",
                table: "UserTestings",
                column: "UserId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserTestings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Testings",
                table: "Testings");

            migrationBuilder.RenameTable(
                name: "Testings",
                newName: "Testing");

            migrationBuilder.RenameColumn(
                name: "UserTestingId",
                table: "Users",
                newName: "TestingId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Testing",
                table: "Testing",
                column: "TestingId");

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
    }
}
