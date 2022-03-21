using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Delegati",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Liga = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Delegati", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Sudija",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    RdBrLige = table.Column<int>(type: "int", nullable: false),
                    PolozajSudije = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sudija", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Timovi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Mesto = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ImeKapitena = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Timovi", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Mecevi",
                columns: table => new
                {
                    MecID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Kolo = table.Column<int>(type: "int", nullable: false),
                    Datum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DelegatID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mecevi", x => x.MecID);
                    table.ForeignKey(
                        name: "FK_Mecevi_Delegati_DelegatID",
                        column: x => x.DelegatID,
                        principalTable: "Delegati",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SpojeviSM",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SudijaID = table.Column<int>(type: "int", nullable: true),
                    MecID = table.Column<int>(type: "int", nullable: true)
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
                    TimID = table.Column<int>(type: "int", nullable: true),
                    MecID = table.Column<int>(type: "int", nullable: true)
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
                name: "IX_Mecevi_DelegatID",
                table: "Mecevi",
                column: "DelegatID");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpojeviSM");

            migrationBuilder.DropTable(
                name: "SpojeviTM");

            migrationBuilder.DropTable(
                name: "Sudija");

            migrationBuilder.DropTable(
                name: "Mecevi");

            migrationBuilder.DropTable(
                name: "Timovi");

            migrationBuilder.DropTable(
                name: "Delegati");
        }
    }
}
