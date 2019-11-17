using System;

namespace Contract
{
    public interface IPlayer
    {
        int PlayerId { get; set; }
        string Name { get; set; }
        RACE Race { get; set; }
    }

    public class Player : IPlayer
    {
        public int PlayerId { get; set; }

        public string Name { get; set; }

        public RACE Race { get; set; }

    }
}
