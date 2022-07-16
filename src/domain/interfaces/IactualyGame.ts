interface IPositions {
    LineOne: string[]
    LineTwo: string[]
    LineThree: string[]
}
    
    export interface IactualyGame {
    userId: string;
    timestamp: number;
    modeGame: string
    positions: IPositions;
}