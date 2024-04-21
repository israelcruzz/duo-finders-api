export interface GamesRepositoryInterface {
  findManyGames(query: string, page: number): Promise<IGame[]>;
  findManyMostGamesAds(): Promise<IGame[]>;
  findGamesPerCategory(categoryId: string): Promise<IGame[]>;
}
