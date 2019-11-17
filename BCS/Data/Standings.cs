using System;
using System.Collections.Generic;
using Contract;
using System.IO;
using Newtonsoft.Json;
using System.Reflection;

namespace Data
{
    public interface IStandings
    {
        IEnumerable<IStanding> GetAllStandings();
    }

    public class Standings : IStandings
    {
        private readonly String _assemblypath;
        public Standings()
        {
            this._assemblypath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
        }

        public IEnumerable<IStanding> GetAllStandings()
        {
            String txt = File.ReadAllText(Path.Combine(this._assemblypath, "Store.json"));
            return JsonConvert.DeserializeObject<List<Standing>>(txt);
            /*
            return new[] {  new Standing(){ Player = new Player() { Name = "RZA", Race = RACE.PROTOSS }, Points = 750 },
                            new Standing(){ Player = new Player() { Name = "Fraetz", Race = RACE.PROTOSS }, Points = 900 },
                            new Standing(){ Player = new Player() { Name = "Borrok", Race = RACE.TERRAN }, Points = 1400 },
                            new Standing(){ Player = new Player() { Name = "Faithless", Race = RACE.PROTOSS }, Points = 3000 }
                           };
                           */
        }

    }
}
