export interface AdRepositoryInterface {
  create({
    name,
    yearPlaying,
    weekDays,
    hoursStart,
    hoursEnd,
    discord,
    useVoiceChannel,
  }: IAd): Promise<IAd>;
  findManyGameAds(gameId: string, page: number): Promise<IAd>;
  findRecentsAds(date: Date): Promise<IAd>;
  showDiscordAd(adId: string): Promise<{ discordName: string }>;
  findManyUserAds(userId: string): Promise<IAd[]>
  deleteUserAd(adId: string): Promise<void>
}