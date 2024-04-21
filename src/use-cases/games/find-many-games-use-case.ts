import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";

interface FindManyGamesUseCaseRequest {
    query: string
    page: number
}

export class FindManyGamesUseCase {
  constructor(private gameRepositorie: GamesRepositoryInterface) {
    this.gameRepositorie = gameRepositorie;
  }

  public async execute({ page, query }: FindManyGamesUseCaseRequest) {
    const gamesRepository = this.gameRepositorie

    const games = await gamesRepository.findManyGames(query, page)

    return games
  }
}
