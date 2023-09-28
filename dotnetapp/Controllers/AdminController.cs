using dotnetapp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetapp.Controllers
{
    //[Authorize(Roles = "admin")]
    [Route("api/admin")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/admin/teams
        [HttpGet("teams")]
        public async Task<IActionResult> GetTeams()
        {
            var teams = await _context.Teams.ToListAsync();
            return Ok(teams);
        }

        // GET: api/admin/players
        [HttpGet("players")]
        public async Task<IActionResult> GetPlayers()
        {
            var players = await _context.Players.ToListAsync();
            return Ok(players);
        }

        // POST: api/admin/teams
        [HttpPost("teams")]
        public async Task<IActionResult> CreateTeam([FromBody] Team team)
        {
            _context.Teams.Add(team);
            await _context.SaveChangesAsync();
            return Ok(team);
        }

        // POST: api/admin/players
        [HttpPost("players")]
        public async Task<IActionResult> CreatePlayer([FromBody] Player player)
        {
            _context.Players.Add(player);
            await _context.SaveChangesAsync();
            return Ok(player);
        }

        // PUT: api/admin/teams/1
        [HttpPut("teams/{id}")]
        public async Task<IActionResult> UpdateTeam(long id, [FromBody] Team team)
        {
            if (id != team.Id)
            {
                return BadRequest();
            }

            _context.Entry(team).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(team);
        }

        // PUT: api/admin/players/1
        [HttpPut("players/{id}")]
        public async Task<IActionResult> UpdatePlayer(long id, [FromBody] Player player)
        {
            if (id != player.Id)
            {
                return BadRequest();
            }

            _context.Entry(player).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(player);
        }

        // DELETE: api/admin/teams/1
        [HttpDelete("teams/{id}")]
        public async Task<IActionResult> DeleteTeam(long id)
        {
            var team = await _context.Teams.FindAsync(id);
            if (team == null)
            {
                return NotFound();
            }

            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/admin/players/1
        [HttpDelete("players/{id}")]
        public async Task<IActionResult> DeletePlayer(long id)
        {
            var player = await _context.Players.FindAsync(id);
            if (player == null)
            {
                return NotFound();
            }

            _context.Players.Remove(player);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
