export class StandingResponse {
    points: number;
    player: Player;
}

export class Player {
    name: string;
    race: RACE;
}

export enum RACE {
    RANDOM = 0,
    TERRAN = 1,
    ZERG = 2,
    PROTOSS = 3
}
