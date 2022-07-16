import { TicTacToeDomainAbstract } from './domain/entities';
import { GatewayMongoDB } from './main/adapters';

function start() {
  const GameRepository = new GatewayMongoDB()
  const initGame = new TicTacToeDomainAbstract(GameRepository)
}

start()
