import { describe, it, expect, afterAll } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { CreateAdUseCase } from "../create-ad-use-case";

describe("Create Ad Use Case", () => {
  afterAll(() => {
    adInMemoryRepositorie.ads = [];
  });

  it("should be able to create ad", async () => {
    const createGame = new CreateAdUseCase(adInMemoryRepositorie);

    const ad = await createGame.execute({
      name: "test",
      discord: "test",
      gameId: "test",
      hoursEnd: 2,
      hoursStart: 2,
      userId: "test",
      useVoiceChannel: true,
      weekDays: "sun",
      yearPlaying: 2,
    });

    expect(ad.name).toEqual(expect.any(String));
  });
});
