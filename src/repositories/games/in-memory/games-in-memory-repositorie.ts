import { GamesRepositoryInterface } from "../games-repository-interface";

class GamesInMemoryRepositorie implements GamesRepositoryInterface {
  public games: IGame[] = [];

  public async findManyGames(query: string, page: number): Promise<IGame[]> {
    let games;

    if (query) {
      games = this.games.filter((game) => game.name.includes(query));

      const gamesSliced = games.slice((page - 1) * 20, page * 20);

      return gamesSliced;
    }

    games = this.games.slice((page - 1) * 20, page * 20);

    return games;
  }

  public async findManyGamesPerCategory(categoryId: string): Promise<IGame[]> {
    const gamesFilteredPerCategory = this.games.filter(
      (game) => game.categoryId === categoryId
    );

    return gamesFilteredPerCategory;
  }

  public async findManyMostGamesAds(): Promise<IGame[]> {
    const gamesWithCount = this.games.map((game) => {
      return {
        ...game,
        adCount: game.ads?.length,
      };
    });

    const sortedGames = gamesWithCount.sort(
      (a, b) => (b.adCount || 1) - (a.adCount || 1)
    );

    const maxAdsCount = sortedGames[0].adCount;

    const gamesWithMostAds = sortedGames.filter(
      (game) => game.adCount === maxAdsCount
    );

    return gamesWithMostAds;
  }
}

export default new GamesInMemoryRepositorie();
