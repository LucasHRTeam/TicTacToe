export class TicTacToeError extends Error {
    constructor(message) {
        super(message)
        this.name = 'TicTacToeError'
    }
}