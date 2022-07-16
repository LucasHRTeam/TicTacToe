export interface TicTacToeRepository {
    insertDataFromGame: (data: any) => any;
    deleteDataFromGame: (data: any) => any;
    checkStateGame: (data: any) => any;
    insertNewMove: (colun: string, line: number) => any;
}