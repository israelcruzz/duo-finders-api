import { AdRepositoryInterface } from "../ad-repository-interface";

class AdInMemoryRepository implements AdRepositoryInterface {
  public ads: IAd[] = [];

  public async create({
    name,
    yearPlaying,
    weekDays,
    hoursStart,
    hoursEnd,
    discord,
    useVoiceChannel,
    gameId,
    userId,
  }: IAd): Promise<IAd> {
    const newAd = {
      name,
      yearPlaying,
      weekDays,
      hoursStart,
      hoursEnd,
      discord,
      useVoiceChannel,
      gameId,
      userId,
    };

    this.ads.push(newAd);

    return newAd;
  }

  public async deleteUserAd(adId: string): Promise<void> {
    const filteredUserAd = this.ads.findIndex((ad) => ad.id === adId);

    if (filteredUserAd !== -1) {
      this.ads.splice(filteredUserAd, 1);
    }
  }

  public async findManyGameAds(gameId: string, page: number): Promise<IAd[]> {
    const filteredGames = this.ads.filter((game) => game.gameId === gameId);

    const slicedGames = filteredGames.slice((page - 1) * 20, page * 20);

    return slicedGames;
  }

  public async findManyUserAds(userId: string): Promise<IAd[]> {
    const userAds = this.ads.filter((game) => game.userId === userId);

    return userAds;
  }

  public async findRecentsAds(date: Date): Promise<IAd[]> {
    const recentAds = this.ads.filter((game) => game.createdAt === date);

    return recentAds;
  }

  public async showDiscordAd(adId: string): Promise<string | null | undefined> {
    const ad = this.ads.find((game) => game.id === adId);

    const discordName = ad?.discord;

    return discordName;
  }
}

export default new AdInMemoryRepository();