using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class V3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpojeviSM");

            migrationBuilder.DropTable(
                name: "SpojeviTM");

            migrationBuilder.CreateTable(
                name: "MecSudija",
                columns: table => new
                {
                    SpojMecMecID = table.Column<int>(type: "int", nullable: false),
                    SpojSudijaID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MecSudija", x => new { x.SpojMecMecID, x.SpojSudijaID });
                    table.ForeignKey(
                        name: "FK_MecSudija_Mecevi_SpojMecMecID",
                        column: x => x.SpojMecMecID,
                        principalTable: "Mecevi",
                        principalColumn: "MecID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MecSudija_Sudija_SpojSudijaID",
                        column: x => x.SpojSudijaID,
                        principalTable: "Sudija",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MecTim",
                columns: table => new
                {
                    SpojMeceviMecID = table.Column<int>(type: "int", nullable: false),
                    SpojTimID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MecTim", x => new { x.SpojMeceviMecID, x.SpojTimID });
                    table.ForeignKey(
                        name: "FK_MecTim_Mecevi_SpojMeceviMecID",
                        column: x => x.SpojMeceviMecID,
                        principalTable: "Mecevi",
                        principalColumn: "MecID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MecTim_Timovi_SpojTimID",
                        column: x => x.SpojTimID,
                        principalTable: "Timovi",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MecSudija_SpojSudijaID",
                table: "MecSudija",
                column: "SpojSudijaID");

            migrationBuilder.CreateIndex(
                name: "IX_MecTim_SpojTimID",
                table: "MecTim",
                column: "SpojTimID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MecSudija");

            migrationBuilder.DropTable(
                name: "MecTim");

            migrationBuilder.CreateTable(
                name: "SpojeviSM",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MecID = table.Column<int>(type: "int", nullable: true),
                    SudijaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpojeviSM", x => x.ID);
                    table.ForeignKey(
                        name: "FK_SpojeviSM_Mecevi_MecID",
                        column: x => x.MecID,
                        principalTable: "Mecevi",
                        principalColumn: "MecID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SpojeviSM_Sudija_SudijaID",
                        column: x => x.SudijaID,
                        principalTable: "Sudija",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SpojeviTM",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MecID = table.Column<int>(type: "int", nullable: true),
                    TimID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpojeviTM", x => x.ID);
                    table.ForeignKey(
                        name: "FK_SpojeviTM_Mecevi_MecID",
                        column: x => x.MecID,
                        principalTable: "Mecevi",
                        principalColumn: "MecID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SpojeviTM_Timovi_TimID",
                        column: x => x.TimID,
                        principalTable: "Timovi",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SpojeviSM_MecID",
                table: "SpojeviSM",
                column: "MecID");

            migrationBuilder.CreateIndex(
                name: "IX_SpojeviSM_SudijaID",
                table: "SpojeviSM",
                column: "SudijaID");

            migrationBuilder.CreateIndex(
                name: "IX_SpojeviTM_MecID",
                table: "SpojeviTM",
                column: "MecID");

            migrationBuilder.CreateIndex(
                name: "IX_SpojeviTM_TimID",
                table: "SpojeviTM",
                column: "TimID");
        }
    }
}
