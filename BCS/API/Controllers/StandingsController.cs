using System;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Contract;
using Business;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StandingsController : ControllerBase
    {
        private readonly ILogger<StandingsController> _logger;

        private readonly IStandings standings;

        public StandingsController(ILogger<StandingsController> logger,
                                   IStandings standings
                                   )
        {
            this.standings = standings;
            this._logger = logger;
        }

        [HttpGet]
        public IEnumerable<IStanding> BcsRanking()
        {
            return standings.GetAllStandings();
        }

    }
}
