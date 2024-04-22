import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";

interface CreateAdUseCaseRequest {
  name: string;
  yearPlaying: number;
  weekDays: string;
  hoursStart: number;
  hoursEnd: number;
  discord: string;
  useVoiceChannel: boolean;
  gameId: string;
  userId: string;
}

export class CreateAdUseCase {
  constructor(private adRepositorie: AdRepositoryInterface) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({
    name,
    yearPlaying,
    weekDays,
    hoursStart,
    hoursEnd,
    discord,
    useVoiceChannel,
    gameId,
    userId,
  }: CreateAdUseCaseRequest) {
    const createdAd = await this.adRepositorie.create({ name, yearPlaying, weekDays, hoursStart, hoursEnd, discord, useVoiceChannel, gameId, userId });

    return createdAd
  }
}
