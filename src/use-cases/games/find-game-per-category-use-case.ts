import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";

interface FindGamePerCategoryUseCaseRequest {
  categoryId: string;
}

export class FindGamePerCategoryUseCase {
  constructor(private gameRepositorie: GamesRepositoryInterface) {
    this.gameRepositorie = gameRepositorie;
  }

  public async execute({ categoryId }: FindGamePerCategoryUseCaseRequest) {
    const gameRepository = this.gameRepositorie;

    const games = await gameRepository.findManyGamesPerCategory(categoryId);

    return games;
  }
}
