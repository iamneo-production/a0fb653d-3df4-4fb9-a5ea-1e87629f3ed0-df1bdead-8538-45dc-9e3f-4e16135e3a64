using dotnetapp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetapp.Controllers
{
    //[Authorize(Roles = "organizer")]
    [Route("api/organizer")]
    [ApiController]
    public class OrganizerController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrganizerController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/organizer/assign
        [HttpPost("assign")]
        public async Task<IActionResult> AssignPlayerToTeam([FromBody] AssignPlayerRequest request)
        {
            if (request == null || request.PlayerId <= 0 || request.TeamId <= 0)
            {
                return BadRequest("Invalid assignment request");
            }

            var player = await _context.Players.FindAsync(request.PlayerId);
            if (player == null)
            {
                return NotFound("Player not found");
            }

            var team = await _context.Teams.FindAsync(request.TeamId);
            if (team == null)
            {
                return NotFound("Team not found");
            }

            if (player.Team != null)
            {
                return BadRequest("Player is already assigned to a team");
            }
            player.Team_Id = request.TeamId;

            player.Team = team;
            team.MaximumBudget -= player.BiddingPrice; // Update team budget
            player.Sold = true;

            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: api/organizer/release
        [HttpPost("release")]
        public async Task<IActionResult> ReleasePlayerFromTeam([FromBody] ReleasePlayerRequest request)
        {
            Console.WriteLine(request.PlayerId);
            if (request == null || request.PlayerId <= 0)
            {
                return BadRequest("Invalid release request");
            }

            var player = await _context.Players.FindAsync(request.PlayerId);
            if (player == null)
            {
                return NotFound("Player not found");
            }

            if (player.Team_Id == null)
            {
                return BadRequest("Player is not assigned to any team");
            }
            player.Sold = false;

            var team = await _context.Teams.FindAsync(player.Team_Id);



            //var team = player.Team;
            player.Team = null;
            player.Team_Id = null;
            team.MaximumBudget += player.BiddingPrice; // Update team budget

            await _context.SaveChangesAsync();

            return Ok();
        }

        // GET: api/organizer/unsold-players
        [HttpGet("unsold-players")]
        public async Task<IActionResult> GetUnsoldPlayers()
        {
            // Retrieve players that are not assigned to any team (unsold players)
            var unsoldPlayers = await _context.Players
                .Where(player => player.Team_Id == null)
                .ToListAsync();

            return Ok(unsoldPlayers);
        }

    }
}
