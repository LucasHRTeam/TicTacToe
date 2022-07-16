import { TicTacToeDomainAbstract } from "../entities/TicTacToe-Domain-Abstract"
import { TicTacToeError } from '../entities/TicTacToeError'
import { IactualyGame } from "../interfaces";

export class LineOne extends TicTacToeDomainAbstract {
    async insertValueInPosition(colun: string, line): Promise<any | boolean> {
        const avaliableOptions: IactualyGame = await this.TicTacToeRepo.checkStateGame('')
        if (!avaliableOptions) return new TicTacToeError('Não existem mais jogadas validas')
        if (avaliableOptions.positions['LineOne'][colun]) return new TicTacToeError('Esta Vaga já está ocupada. Por favor jogue novamente em outra casa!')
        this.TicTacToeRepo.insertNewMove(colun, line)
    }
}