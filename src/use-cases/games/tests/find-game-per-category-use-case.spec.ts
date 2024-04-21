import { describe, it, expect, beforeAll, afterAll } from "vitest";
import gamesInMemoryRepositorie from "../../../repositories/games/in-memory/games-in-memory-repositorie";
import { FindGamePerCategoryUseCase } from "../find-game-per-category-use-case";

describe("Find Many Most Games Use Case", () => {
  beforeAll(() => {
    gamesInMemoryRepositorie.games.push({
      name: "game-test",
      description: "game-test",
      image: "url-false",
      categoryId: 'test',
      ads: [
        {
          name: "test",
          discord: "test",
          hoursEnd: 1,
          hoursStart: 2,
          useVoiceChannel: true,
          weekDays: "test",
          yearPlaying: 2,
        },
        {
            name: "test2",
            discord: "test2",
            hoursEnd: 2,
            hoursStart: 3,
            useVoiceChannel: true,
            weekDays: "test",
            yearPlaying: 6,
          },
      ],
    });
  });

  afterAll(() => {
    gamesInMemoryRepositorie.games = [];
  });

  it("should be able to listing games for one category", async () => {
    const findGamePerCategory = new FindGamePerCategoryUseCase(
        gamesInMemoryRepositorie
    );

    const games = await findGamePerCategory.execute({ categoryId: 'test' });

    expect(games).toHaveLength(1);
  });
});
