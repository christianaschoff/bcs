using System;

namespace Contract
{
    public interface IStanding
    {
        int Points { get; set; }
        Player Player { get; set; }
    }

    public class Standing : IStanding
    {
        public int Points { get; set; }

        public Player Player { get; set; }
    }
}
