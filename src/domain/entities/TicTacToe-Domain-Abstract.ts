import { TicTacToeRepository, IactualyGame } from '../interfaces'

export class TicTacToeDomainAbstract {
    constructor(
        readonly TicTacToeRepo: TicTacToeRepository
    ) {}
    async startNewGame(userId: string): Promise<any> {
        const isGame = await this.checkCurrentGame(userId)
        if (!isGame) {
            return this.TicTacToeRepo.insertDataFromGame('')
        } else return false;
    }

    async endCurrentGame(userId: string): Promise<any> {
        const isGame = await this.checkCurrentGame(userId)
        if (isGame) {
            return this.TicTacToeRepo.deleteDataFromGame('')
        } else return false;
    }

    async checkCurrentGame(userId: string): Promise<IactualyGame | boolean> {
        const isRunningGame: IactualyGame | boolean = await this.TicTacToeRepo.checkStateGame(userId)
        return isRunningGame;

    }
}
