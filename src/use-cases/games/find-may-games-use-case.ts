import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";

interface FindManyCategoriesUseCaseRequest {
    query: string
    page: number
}

export class FindManyCategoriesUseCase {
  constructor(private gameRepositorie: GamesRepositoryInterface) {
    this.gameRepositorie = gameRepositorie;
  }

  public async execute({ page, query }: FindManyCategoriesUseCaseRequest) {
    const categoriesRepository = this.gameRepositorie

    const categories = await categoriesRepository.findManyGames(query, page)

    return categories
  }
}
