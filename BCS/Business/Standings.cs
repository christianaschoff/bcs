using System;
using System.Collections.Generic;
using Contract;
using Data;
using System.Linq;

namespace Business
{
    public interface IStandings
    {
        IEnumerable<IStanding> GetAllStandings();
    }

    public class Standings : IStandings
    {

        private readonly Data.IStandings _data;

        public Standings(Data.IStandings _data)
        {
            this._data = _data;

        }

        public IEnumerable<IStanding> GetAllStandings()
        {
            IEnumerable<IStanding> standings = _data.GetAllStandings();
            return standings.OrderByDescending(x => x.Points);
        }

    }
}
