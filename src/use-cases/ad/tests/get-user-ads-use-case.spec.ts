import { describe, it, expect, beforeAll, afterAll } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { GetUserAdsUseCase } from "../get-user-ads-use-case";

describe("Get User Ads Use Case", () => {
  beforeAll(() => {
    adInMemoryRepositorie.ads.push({
      name: "user-test",
      discord: "user-test",
      gameId: "user-test",
      hoursEnd: 1,
      hoursStart: 2,
      userId: "user-test",
      useVoiceChannel: true,
      weekDays: "user-test",
      yearPlaying: 4,
    });
  });

  afterAll(() => {
    adInMemoryRepositorie.ads = [];
  });

  it("should be able to listing user ads", async () => {
    const findManyUserAds = new GetUserAdsUseCase(adInMemoryRepositorie);

    const userAds = await findManyUserAds.execute({ userId: "user-test" });

    expect(userAds).toHaveLength(1);
  });
});
